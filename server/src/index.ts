import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes";
import authRouter from "./routes/authRoutes";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "https://noris-stitches.vercel.app",
      "http://localhost:5173",
      "http://localhost:4173",
    ],
    credentials: true,
  }),
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/debug", async (_req, res) => {
  try {
    const db = mongoose.connection.db;

    if (!db) {
      return res.status(500).json({ message: "Database not connected yet" });
    }

    const all = await db.collection("dresses").find().toArray();
    res.json(all);
  } catch (err) {
    res.status(500).json({ message: "Debug query failed", err });
  }
});

app.use("/products", productRouter);
app.use("/auth", authRouter);

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "admin@norisstitches.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const exists = await Admin.findOne({ email });
  if (exists) return;

  await Admin.create({ email, password });
  console.log(`Admin seeded: ${email}`);
}

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "products",
    });

    console.log("MongoDB Connected");

    await seedAdmin();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
}

startServer();
