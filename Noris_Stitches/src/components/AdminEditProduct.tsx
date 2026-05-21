import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getProduct, updateProduct, getCategories } from "../tools/db_interface";
import type { Outfit } from "../assets/data";

const defaultSizes = { sm: "0", m: "0", l: "0", xl: "0", xxl: "0" };

export default function AdminEditProduct() {
  const { id } = useParams();
  const { logout, email } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("In Stock");
  const [sizes, setSizes] = useState(defaultSizes);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const product: Outfit = await getProduct(id);
        setName(product.name);
        setPrice(String(product.price));
        setCategory(product.category || "");
        setTag(product.tag || "In Stock");
        setSizes(product.sizes || defaultSizes);
        setExistingImage(product.imageUrl || "");
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSize = (key: string, val: string) => {
    setSizes((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("tag", tag);
      formData.append("sizes", JSON.stringify(sizes));
      if (image) formData.append("image", image);

      await updateProduct(id!, formData);
      setSuccess("Product updated successfully!");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to update product");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-heading text-yellow-400">Edit Product</h1>
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => navigate("/admin")}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition"
          >
            Back
          </button>
          <span className="text-gray-400">{email}</span>
          <button
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-heading mb-6">Edit Product</h2>

        {error && (
          <p className="bg-red-900/50 border border-red-500 text-red-300 rounded-lg px-4 py-2 mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-900/50 border border-green-500 text-green-300 rounded-lg px-4 py-2 mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name *</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Price (₦) *</label>
            <input
              type="number"
              required
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <input
              list="cat-list"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Bubu, Dresses, Pallazzo"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
            />
            <datalist id="cat-list">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Tag</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
            >
              <option>In Stock</option>
              <option>Out of Stock</option>
              <option>Pre-Order</option>
            </select>
          </div>

          <fieldset>
            <legend className="text-sm text-gray-400 mb-2">Sizes (quantity per size)</legend>
            <div className="grid grid-cols-5 gap-2">
              {["sm", "m", "l", "xl", "xxl"].map((sz) => (
                <div key={sz} className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 uppercase mb-1">{sz}</label>
                  <input
                    type="number"
                    min="0"
                    value={(sizes as any)[sz]}
                    onChange={(e) => handleSize(sz, e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-lg px-2 py-1 text-center focus:outline-none focus:border-yellow-400"
                  />
                </div>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Product Image</label>
            {existingImage && !preview && (
              <img
                src={existingImage}
                alt="Current"
                className="mb-3 w-40 h-40 object-cover rounded-lg border border-white/10"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-40 h-40 object-cover rounded-lg border border-white/10"
              />
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50 text-lg"
            >
              {submitting ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="bg-white/10 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
