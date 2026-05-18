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

import { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Catalogue from "./Catalogue";
import ProductDetails from "./ProductDetails";
import { type Outfit } from "../assets/data";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Outfit | null>(null);

  return (
    <div className="App">
      <Header />
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          <Banner />
          <Catalogue onProductClick={setSelectedProduct} />
        </>
      )}
    </div>
  );
}

export default App;
