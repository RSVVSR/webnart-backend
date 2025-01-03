const AWS = require('aws-sdk');

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

// Configure AWS SDK
const s3 = new AWS.S3({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

// Generate pre-signed URL
const generatePresignedUrl = async (req, res) => {
    const { fileName, fileType } = req.body;

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Expires: 60, // URL expires in 60 seconds
        ContentType: fileType,
    };

    try {
        const url = await s3.getSignedUrl('putObject', params);
        res.json({ url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to generate URL' });
    }
};

module.exports = { generatePresignedUrl };