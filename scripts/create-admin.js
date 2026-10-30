#!/usr/bin/env node

/**
 * REINSOFT CMS - Secure Admin User Provisioning Script
 *
 * Usage (interactive):
 *   node scripts/create-admin.js
 *
 * Usage (CLI arguments):
 *   node scripts/create-admin.js --name="Admin Name" --email="admin@reinsoft.tech" --role="SUPER_ADMIN"
 *   (Password will be prompted securely to prevent shell history leaks)
 *
 * Usage (automated / CI via environment variable):
 *   ADMIN_PASSWORD="YourSecurePassword" node scripts/create-admin.js --name="Admin Name" --email="admin@reinsoft.tech"
 *
 * Usage (CLI argument with password - supported with history warning):
 *   node scripts/create-admin.js --name="Admin Name" --email="admin@reinsoft.tech" --password="YourPassword" --role="SUPER_ADMIN"
 *
 * Safeguards:
 *   - Never stores or logs plain text passwords
 *   - Uses bcrypt with cost factor 12 (matching lib/auth.js)
 *   - Normalizes emails and prevents duplicate accounts
 *   - Connects using DATABASE_URL / DIRECT_URL from .env.local or .env
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

// Load environment variables (.env.local first, fallback to .env)
function loadEnv() {
    ['.env.local', '.env'].forEach((fileName) => {
        const filePath = path.resolve(process.cwd(), fileName);
        if (!fs.existsSync(filePath)) return;
        const lines = fs.readFileSync(filePath, 'utf8').split('\n');
        lines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return;
            const match = trimmed.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                let val = match[2].trim().replace(/^["']|["']$/g, '');
                if (process.env[key] === undefined) {
                    process.env[key] = val;
                }
            }
        });
    });
}

loadEnv();

function parseArgs() {
    const args = {};
    process.argv.slice(2).forEach((arg) => {
        const match = arg.match(/^--([^=]+)=(.*)$/);
        if (match) {
            args[match[1]] = match[2].trim().replace(/^["']|["']$/g, '');
        }
    });
    return args;
}

function askText(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

function askPassword(question) {
    return new Promise((resolve) => {
        if (!process.stdin.isTTY) {
            // In non-interactive or piped environments, read line directly
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question(question, (answer) => {
                rl.close();
                resolve(answer.trim());
            });
            return;
        }

        const stdin = process.stdin;
        const stdout = process.stdout;
        stdout.write(question);

        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');

        let password = '';
        const onData = (chunk) => {
            for (let i = 0; i < chunk.length; i++) {
                const char = chunk[i];
                switch (char) {
                    case '\r':
                    case '\n':
                    case '\u0004': // EOF
                        stdin.setRawMode(false);
                        stdin.pause();
                        stdin.removeListener('data', onData);
                        stdout.write('\n');
                        resolve(password);
                        return;
                    case '\u0003': // Ctrl+C
                        stdin.setRawMode(false);
                        stdin.pause();
                        stdin.removeListener('data', onData);
                        stdout.write('\n[ABORTED] Operation cancelled by user.\n');
                        process.exit(1);
                        return;
                    case '\u0008':
                    case '\x7f': // Backspace
                        if (password.length > 0) {
                            password = password.slice(0, -1);
                            stdout.write('\b \b');
                        }
                        break;
                    default:
                        // Only capture printable characters (ASCII >= 32)
                        if (char.charCodeAt(0) >= 32) {
                            password += char;
                            stdout.write('*');
                        }
                        break;
                }
            }
        };

        stdin.on('data', onData);
    });
}

async function main() {
    console.log('\n======================================================');
    console.log('  REINSOFT CMS - SECURE ADMIN PROVISIONING UTILITY    ');
    console.log('======================================================\n');

    const cliArgs = parseArgs();
    let name = cliArgs.name;
    let email = cliArgs.email;
    let role = (cliArgs.role || 'SUPER_ADMIN').toUpperCase();
    let password = cliArgs.password || process.env.ADMIN_PASSWORD;

    if (cliArgs.password) {
        console.warn('[SECURITY NOTICE] Passing plaintext passwords via CLI arguments can');
        console.warn('                  expose them in shell history and process listings.');
        console.warn('                  Prefer interactive prompts or the ADMIN_PASSWORD environment variable.\n');
    }

    // 1. Collect missing inputs interactively
    if (!name) {
        name = await askText('Admin Full Name: ');
    }

    if (!email) {
        email = await askText('Admin Email Address: ');
    }

    if (!password) {
        password = await askPassword('Admin Password (min. 8 characters): ');
    }

    // 2. Validations
    if (!name || name.trim().length < 2) {
        console.error('\n[ERROR] Name must be at least 2 characters.');
        process.exit(1);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email ? email.trim().toLowerCase() : '';
    if (!normalizedEmail || !emailRegex.test(normalizedEmail)) {
        console.error('\n[ERROR] A valid email address is required.');
        process.exit(1);
    }

    if (!password || password.length < 8) {
        console.error('\n[ERROR] Password must be at least 8 characters long.');
        process.exit(1);
    }

    const VALID_ROLES = ['SUPER_ADMIN', 'EDITOR'];
    if (!VALID_ROLES.includes(role)) {
        console.error(`\n[ERROR] Role must be one of: ${VALID_ROLES.join(', ')} (got: "${role}").`);
        process.exit(1);
    }

    // 3. Database operations
    const prisma = new PrismaClient();

    try {
        // Check for duplicate administrator
        const existing = await prisma.adminUser.findUnique({
            where: { email: normalizedEmail },
        });

        if (existing) {
            console.error(`\n[ERROR] An administrator with email "${normalizedEmail}" already exists.`);
            console.error('        Account overwrite and duplication are blocked for security.');
            process.exit(1);
        }

        console.log('\nHashing credentials with bcrypt (cost factor 12)...');
        const passwordHash = await bcrypt.hash(password, 12);

        console.log('Writing administrator record to database...');
        const user = await prisma.adminUser.create({
            data: {
                name: name.trim(),
                email: normalizedEmail,
                passwordHash,
                role,
                isActive: true,
            },
        });

        // Audit log entry
        try {
            await prisma.auditLog.create({
                data: {
                    userId: user.id,
                    action: 'ADMIN_PROVISIONED',
                    details: {
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        provisionedVia: 'CLI_SCRIPT',
                    },
                },
            });
        } catch (auditErr) {
            console.warn('[WARN] Admin record created, but audit log entry could not be written:', auditErr.message);
        }

        console.log('\n[SUCCESS] Administrator account provisioned successfully!');
        console.log('------------------------------------------------------');
        console.log(`  User ID:    ${user.id}`);
        console.log(`  Name:       ${user.name}`);
        console.log(`  Email:      ${user.email}`);
        console.log(`  Role:       ${user.role}`);
        console.log(`  Status:     Active`);
        console.log('------------------------------------------------------');
        console.log('You can now log in at /admin/login\n');
    } catch (err) {
        console.error('\n[ERROR] Provisioning failed:', err.message);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((err) => {
    console.error('\n[FATAL] Unexpected error:', err);
    process.exit(1);
});
