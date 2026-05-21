import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes";
import authRouter from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors());
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

// Serve built frontend in production
const distPath = path.join(__dirname, "../../dist");
app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "products",
    });

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
}

startServer();
