import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/productRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Health check
app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

// DEBUG route (raw MongoDB access)
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

// Product routes
app.use("/products", router);

// Connect DB first, then start server
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
