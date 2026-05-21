import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Catalogue from "./Catalogue";
import ProductDetails from "./ProductDetails";
import About from "./About";
import Contact from "./Contact";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminEditProduct from "./AdminEditProduct";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import { getProducts } from "../tools/db_interface";
import { outfits, type Outfit } from "../assets/data";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [products, setProducts] = useState<Outfit[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      if (data) setProducts(data);
    };
    loadProducts();
  }, []);

  const displayProducts = products.length ? products : outfits;
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Catalogue products={displayProducts} />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={displayProducts} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <ProtectedRoute>
                <AdminEditProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
        {!isAdmin && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
