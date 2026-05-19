// import Header from "./Header";
// import Banner from "./Banner";
// import Catalogue from "./Catalogue";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Header />
//         <Banner />
//       </div>
//       <Catalogue />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Catalogue from "./Catalogue";
import ProductDetails from "./ProductDetails";
import { getProducts } from "../tools/db_interface";
import { outfits, type Outfit } from "../assets/data";

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

  return (
    <div className="App">
      <Header />
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
      </Routes>
    </div>
  );
}

export default App;
