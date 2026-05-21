import express from "express";
import mongoose from "mongoose";
import auth from "../middleware/auth";
import { upload, uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary";
import {
  getModel,
  getAllProducts,
  getAllCollectionNames,
  findProductById,
  collectionName,
  productSchema,
} from "../tools/collections";

const router = express.Router();

router.get("/categories", async (_req, res) => {
  try {
    const names = await getAllCollectionNames();
    const categories = names.map((n) => n.replace(/_/g, " "));
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

router.get("/", async (_req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("GET /products failed:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const found = await findProductById(String(req.params.id));
    if (!found) return res.status(404).json({ message: "Product not found" });
    res.json(found.product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

router.post(
  "/",
  auth,
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res
          .status(400)
          .json({ message: "File upload error", error: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      const { name, price, category, tag, sizes } = req.body;

      if (!name || !price) {
        return res
          .status(400)
          .json({ message: "Name and price are required" });
      }

      let imageUrl = "";
      let cloudinaryId = "";
      if (req.file) {
        const uploaded = await uploadToCloudinary(req.file.buffer, req.file.mimetype);
        if (uploaded) {
          imageUrl = uploaded.url;
          cloudinaryId = uploaded.publicId;
        }
      }

      const parsedSizes =
        typeof sizes === "string" ? JSON.parse(sizes) : sizes;
      const cat = category || "Uncategorized";

      const Model = getModel(cat);
      const product = await Model.create({
        name,
        price: Number(price),
        category: cat,
        tag: tag || "In Stock",
        sizes: parsedSizes || {},
        imageUrl,
        cloudinaryId,
      });

      console.log(`Product created in ${collectionName(cat)}:`, product._id);
      res.status(201).json(product);
    } catch (error: any) {
      console.error("POST /products failed:", error?.message || error);
      res.status(500).json({ message: "Failed to create product" });
    }
  }
);

router.put(
  "/:id",
  auth,
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res
          .status(400)
          .json({ message: "File upload error", error: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      const { name, price, category, tag, sizes } = req.body;

      const found = await findProductById(String(req.params.id));
      if (!found)
        return res.status(404).json({ message: "Product not found" });

      const existing = found.product as any;
      const parsedSizes =
        typeof sizes === "string" ? JSON.parse(sizes) : sizes;

      const update: any = {};
      if (name) update.name = name;
      if (price) update.price = Number(price);
      if (tag) update.tag = tag;
      if (sizes) update.sizes = parsedSizes;

      if (req.file) {
        // Delete old image from Cloudinary if it exists
        if (existing.cloudinaryId) {
          await deleteFromCloudinary(existing.cloudinaryId);
        }

        const uploaded = await uploadToCloudinary(
          req.file.buffer,
          req.file.mimetype
        );
        if (uploaded) {
          update.imageUrl = uploaded.url;
          update.cloudinaryId = uploaded.publicId;
        }
      }

      const currentCat = existing.category || "Uncategorized";
      const newCat = category || currentCat;

      let updated;

      if (newCat !== currentCat) {
        const oldModel =
          mongoose.models[found.collection] ||
          mongoose.model(found.collection, productSchema, found.collection);
        await oldModel.findByIdAndDelete(String(req.params.id));

        update.category = newCat;
        const newModel = getModel(newCat);
        updated = await newModel.create({
          ...existing,
          ...update,
          _id: undefined,
        });

        console.log(
          `Product moved to ${collectionName(newCat)}:`,
          updated._id
        );
      } else {
        update.category = currentCat;
        const model =
          mongoose.models[found.collection] ||
          mongoose.model(found.collection, productSchema, found.collection);
        updated = await model.findByIdAndUpdate(String(req.params.id), update, {
          new: true,
        });
      }

      res.json(updated);
    } catch (error: any) {
      console.error("PUT /products failed:", error?.message || error);
      res.status(500).json({ message: "Failed to update product" });
    }
  }
);

router.delete("/:id", auth, async (req, res) => {
  try {
    const found = await findProductById(String(req.params.id));
    if (!found)
      return res.status(404).json({ message: "Product not found" });

    const existing = found.product as any;

    // Delete image from Cloudinary
    if (existing.cloudinaryId) {
      await deleteFromCloudinary(existing.cloudinaryId);
    }

    const model =
      mongoose.models[found.collection] ||
      mongoose.model(found.collection, productSchema, found.collection);
    await model.findByIdAndDelete(String(req.params.id));

    console.log("Product deleted from", found.collection);
    res.json({ message: "Product deleted" });
  } catch (error: any) {
    console.error("DELETE /products failed:", error?.message || error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

export default router;
