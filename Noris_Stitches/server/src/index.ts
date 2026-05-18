import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./models/Products";
import router from "./routes/productRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", router);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string, { dbName: "products" })
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/products", async (req, res) => {
  console.log("get worked");
  const products = await Product.find();
  res.json(products);
});

app.get("/debug", async (req, res) => {
  const all = await mongoose.connection.db
    .collection("dresses")
    .find()
    .toArray();

  res.json(all);
});

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error saving product: " + error });
  }
});
