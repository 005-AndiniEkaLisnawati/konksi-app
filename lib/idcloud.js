import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Inisialisasi S3 Client untuk IDCloudHost
const client = new S3Client({
  region: process.env.IDCLOUD_REGION || "us-east-1",
  endpoint: process.env.IDCLOUD_ENDPOINT || "https://is3.cloudhost.id",
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.IDCLOUD_ACCESS_KEY,
    secretAccessKey: process.env.IDCLOUD_SECRET_KEY,
  },
});

/**
 * 1. GET: Ambil Signed URL dari CDN Production (cdn.konksi.com)
 */
export async function signedUrl(key) {
  if (!key) return null;
  
  // Jika sudah URL lengkap, return langsung
  if (key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }

  try {
    return await getSignedUrl(
      client,
      new GetObjectCommand({
        Bucket: process.env.IDCLOUD_BUCKET_DEV || "cdn.konksi.dev.com",
        Key: key,
      }),
      { expiresIn: 600 } // 10 Menit
    );
  } catch (error) {
    console.error("Failed to generate signedUrl:", error);
    return null;
  }
}

export async function uploadToStorage(file, folderPath) {
  // Uint8Array jauh lebih cepat daripada Buffer.from(await file.arrayBuffer())
  const bytes = new Uint8Array(await file.arrayBuffer());

  const ext = (file.name || "png").split(".").pop().toLowerCase();
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
  const key = `${folderPath}/${fileName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.IDCLOUD_BUCKET_DEV || "cdn.konksi.dev.com",
    Key: key,
    Body: bytes, // Langsung passing Uint8Array
    ContentType: file.type || "image/png",
    ACL: "public-read",
  });

  await client.send(command);
  return fileName;
}
/**
 * 3. DELETE: Hapus file dari Bucket Dev (cdn.konksi.dev.com)
 */
export async function deleteFromStorage(key) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.IDCLOUD_BUCKET_DEV || "cdn.konksi.dev.com",
      Key: key,
    });
    await client.send(command);
  } catch (error) {
    console.warn("Failed to delete file from IDCloudHost:", error.message);
  }
}