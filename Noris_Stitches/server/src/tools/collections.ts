import mongoose, { Schema, Model } from "mongoose";

const sizeSchema = new Schema(
  {
    sm: { type: String, default: "0" },
    m: { type: String, default: "0" },
    l: { type: String, default: "0" },
    xl: { type: String, default: "0" },
    xxl: { type: String, default: "0" },
  },
  { _id: false }
);

export const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: "" },
  tag: { type: String, default: "In Stock" },
  sizes: { type: sizeSchema, default: () => ({}) },
  imageUrl: { type: String, default: "" },
  cloudinaryId: { type: String, default: "" },
});

function sanitize(name: string): string {
  return name.replace(/[^a-zA-Z0-9_ -]/g, "").trim().replace(/\s+/g, "_") || "Uncategorized";
}

export function collectionName(category: string): string {
  return sanitize(category);
}

export function getModel(category: string): Model<any> {
  const name = collectionName(category);
  if (mongoose.models[name]) return mongoose.models[name];
  return mongoose.model(name, productSchema, name);
}

function getOrCreateModel(collection: string): Model<any> {
  if (mongoose.models[collection]) return mongoose.models[collection];
  return mongoose.model(collection, productSchema, collection);
}

export async function getAllCollectionNames(): Promise<string[]> {
  const db = mongoose.connection.db;
  if (!db) return [];
  const cols = await db.listCollections().toArray();
  const names = cols
    .filter((c) => c.name !== "admins" && !c.name.startsWith("system."))
    .map((c) => c.name)
    .sort();
  return names;
}

export async function getAllProducts(): Promise<any[]> {
  const names = await getAllCollectionNames();
  const models = names.map(getOrCreateModel);
  const results = await Promise.all(models.map((m) => m.find().lean()));
  return results.flat();
}

export async function findProductById(id: string): Promise<{ product: any; collection: string } | null> {
  const names = await getAllCollectionNames();
  for (const name of names) {
    const model = getOrCreateModel(name);
    const product = await model.findById(id).lean();
    if (product) return { product, collection: name };
  }
  return null;
}
