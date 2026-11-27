#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

function readEnvFile(filename) {
    const filePath = path.resolve(process.cwd(), filename);
    if (!fs.existsSync(filePath)) return {};

    const values = {};
    for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        const separator = trimmed.indexOf('=');
        if (separator === -1) continue;

        const key = trimmed.slice(0, separator).trim();
        let value = trimmed.slice(separator + 1).trim();
        if (
            (value.startsWith('"') && value.endsWith('"'))
            || (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }
        values[key] = value;
    }
    return values;
}

function getDatabaseUrl(filename) {
    const values = readEnvFile(filename);
    return values.DIRECT_URL || values.DATABASE_URL;
}

function createClient(url) {
    return new PrismaClient({
        datasources: {
            db: { url },
        },
    });
}

function getSyncData(caseStudy) {
    const {
        id,
        createdAt,
        updatedAt,
        ...data
    } = caseStudy;
    return data;
}

async function main() {
    const shouldApply = process.argv.includes('--apply');
    const sourceUrl = getDatabaseUrl('.env.local') || getDatabaseUrl('.env');
    const targetUrl = getDatabaseUrl('.env.production.local');

    if (!sourceUrl) {
        throw new Error('Local database URL not found in .env.local or .env.');
    }
    if (!targetUrl) {
        throw new Error(
            'Production database URL not found. Run "npx vercel env pull .env.production.local --environment=production" first.'
        );
    }
    if (sourceUrl === targetUrl) {
        throw new Error('Local and production database URLs are identical. Sync aborted for safety.');
    }

    const source = createClient(sourceUrl);
    const target = createClient(targetUrl);

    try {
        const caseStudies = await source.caseStudy.findMany({
            orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });

        console.log(`Found ${caseStudies.length} local case study record(s).`);
        if (caseStudies.length === 0) return;

        for (const caseStudy of caseStudies) {
            const existing = await target.caseStudy.findUnique({
                where: { slug: caseStudy.slug },
                select: { id: true, title: true },
            });
            const action = existing ? 'UPDATE' : 'CREATE';
            console.log(`${action}: ${caseStudy.slug} - ${caseStudy.title}`);

            if (caseStudy.heroImage?.startsWith('/assets/')) {
                console.log(`  Asset required in deployment: ${caseStudy.heroImage}`);
            }

            if (shouldApply) {
                await target.caseStudy.upsert({
                    where: { slug: caseStudy.slug },
                    create: getSyncData(caseStudy),
                    update: getSyncData(caseStudy),
                });
            }
        }

        if (!shouldApply) {
            console.log('\nDry run only. Re-run with --apply to write these records to production.');
        } else {
            console.log('\nProduction case studies synced. No records were deleted.');
        }
    } finally {
        await source.$disconnect();
        await target.$disconnect();
    }
}

main().catch((error) => {
    console.error(`Sync failed: ${error.message}`);
    process.exitCode = 1;
});
