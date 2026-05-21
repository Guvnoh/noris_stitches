import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createProduct, getProducts, deleteProduct, getCategories } from "../tools/db_interface";
import type { Outfit } from "../assets/data";

const defaultSizes = { sm: "0", m: "0", l: "0", xl: "0", xxl: "0" };

export default function AdminDashboard() {
  const { logout, email } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Outfit[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("In Stock");
  const [sizes, setSizes] = useState(defaultSizes);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setError("Failed to load products");
    } finally {
      setProductsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

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

  const reset = () => {
    setName("");
    setPrice("");
    setCategory("");
    setTag("In Stock");
    setSizes(defaultSizes);
    setImage(null);
    setPreview(null);
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

      await createProduct(formData);
      setSuccess("Product added successfully!");
      reset();
      loadProducts();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to create product");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this product? This cannot be undone.")) return;
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setSuccess("Product deleted");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to delete product");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-heading text-yellow-400">Admin Panel</h1>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-400">{email}</span>
          <button
            onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
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

        {/* Product List */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading mb-4">Products ({products.length})</h2>

          {productsLoading ? (
            <p className="text-gray-400">Loading...</p>
          ) : products.length === 0 ? (
            <p className="text-gray-500">No products yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                    <th className="py-3 pr-4">Image</th>
                    <th className="py-3 pr-4">Name</th>
                    <th className="py-3 pr-4">Price</th>
                    <th className="py-3 pr-4">Category</th>
                    <th className="py-3 pr-4">Tag</th>
                    <th className="py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p._id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 pr-4">
                        {p.imageUrl ? (
                          <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">
                            No img
                          </div>
                        )}
                      </td>
                      <td className="py-3 pr-4 font-medium">{p.name}</td>
                      <td className="py-3 pr-4">₦{p.price?.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-gray-400">{p.category || "—"}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
                          {p.tag}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button
                          onClick={() => navigate(`/admin/edit/${p._id}`)}
                          className="text-yellow-400 hover:text-yellow-300 mr-3 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p._id)}
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Add Product Form */}
        <section>
          <h2 className="text-2xl font-heading mb-6">Add New Product</h2>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
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

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50 text-lg"
            >
              {submitting ? "Uploading..." : "Add Product"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
