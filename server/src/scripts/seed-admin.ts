import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI as string, {
    dbName: "products",
  });

  const email = process.env.ADMIN_EMAIL || "admin@norisstitches.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  // Delete existing to avoid stale plaintext password
  await Admin.deleteOne({ email });

  const admin = new Admin({ email, password });
  await admin.save();
  console.log("Admin created");

  // Verify
  const doc = await Admin.findOne({ email });
  if (doc) {
    const match = await bcrypt.compare(password, doc.password);
    console.log(`Verification: ${match ? "PASS" : "FAIL"}`);
  }

  console.log(`Admin email: ${email}`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
