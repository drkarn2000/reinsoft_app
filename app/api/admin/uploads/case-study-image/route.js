import { Readable } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

function getCloudinaryConfig() {
    const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

    if (process.env.CLOUDINARY_URL) {
        return process.env.CLOUDINARY_URL;
    }

    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
        throw new Error(
            'Cloudinary is not configured. Set CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.'
        );
    }

    return {
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,
    };
}

function uploadToCloudinary(buffer, mimeType, folder) {
    cloudinary.config(getCloudinaryConfig());

    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: folder === 'team'
                    ? 'reinsoft/team'
                    : process.env.CLOUDINARY_CASE_STUDY_FOLDER || 'reinsoft/case-studies',
                resource_type: 'image',
                format: mimeType === 'image/png' ? 'png' : undefined,
            },
            (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            }
        );

        Readable.from(buffer).pipe(uploadStream);
    });
}

export async function POST(request) {
    try {
        await requireAdmin();

        const formData = await request.formData();
        const file = formData.get('file');
        const folder = formData.get('folder');

        if (!file || typeof file.arrayBuffer !== 'function') {
            return NextResponse.json({ error: 'Please select an image to upload.' }, { status: 400 });
        }

        if (!ALLOWED_TYPES.has(file.type)) {
            return NextResponse.json(
                { error: 'Only JPEG, PNG, WebP, and GIF images are supported.' },
                { status: 400 }
            );
        }

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json({ error: 'Images must be 10 MB or smaller.' }, { status: 400 });
        }

        const result = await uploadToCloudinary(
            Buffer.from(await file.arrayBuffer()),
            file.type,
            folder
        );

        if (!result?.secure_url) {
            throw new Error('Cloudinary did not return an image URL.');
        }

        return NextResponse.json({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
        });
    } catch (error) {
        console.error('Error uploading case study image:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to upload image.' },
            { status: error.status || 500 }
        );
    }
}
