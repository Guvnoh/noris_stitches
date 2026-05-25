import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginAdmin } from "../tools/db_interface";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginAdmin(email, password);
      login(data.token, data.email);
      navigate("/admin");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-heading text-center text-yellow-400">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
