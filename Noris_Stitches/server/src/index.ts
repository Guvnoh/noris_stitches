//
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Products";
import router from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/products", router);

const PORT = process.env.PORT || 5000;

// GET all products (Mongoose model)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", err });
  }
});

// DEBUG route (raw MongoDB access)
app.get("/debug", async (req, res) => {
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

// CREATE product
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error saving product",
      error,
    });
  }
});

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
