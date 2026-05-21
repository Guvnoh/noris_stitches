import { v2 as cloudinary } from "cloudinary";
import { UploadApiResponse } from "cloudinary";
import multer, { memoryStorage } from "multer";

const upload = multer({ storage: memoryStorage() });

function isConfigured() {
  return !!(
    process.env.CLOUDINARY_NAME &&
    process.env.CLOUDINARY_NAME !== "your_cloud_name"
  );
}

function ensureConfigured() {
  if (isConfigured()) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
}

async function uploadToCloudinary(
  buffer: Buffer,
  mimetype: string
): Promise<{ url: string; publicId: string } | null> {
  if (!isConfigured()) {
    console.warn("Cloudinary not configured — skipping image upload");
    return null;
  }

  ensureConfigured();

  try {
    const result = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "noris-stitches" },
        (err, result) => {
          if (err || !result) reject(err || new Error("Upload returned no result"));
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    return { url: result.secure_url, publicId: result.public_id };
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    return null;
  }
}

async function deleteFromCloudinary(publicId: string): Promise<void> {
  if (!isConfigured()) return;
  ensureConfigured();

  try {
    await cloudinary.uploader.destroy(publicId);
    console.log("Cloudinary image deleted:", publicId);
  } catch (err) {
    console.error("Cloudinary delete failed:", err);
  }
}

export { cloudinary, upload, uploadToCloudinary, deleteFromCloudinary, isConfigured };
