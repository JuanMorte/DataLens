import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

export const getS3ImageUrl = (imageKey) => {
    return `https://${import.meta.env.AWS_BUCKET_NAME}.s3.${import.meta.env.AWS_REGION}.amazonaws.com/${imageKey}`;
}