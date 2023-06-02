import Sale from "./pages/SalePage/sale.tsx";
import { headPhones, wireless } from "./data/index.js";
import { ProductContext } from "./data/context.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cartPage/Cart";

function App() {
  const [selectedData, setSelectedData] = useState<number[]>([]);

  const addSelectedData = (productId: number) => {
    if (!selectedData.includes(productId)) {
      setSelectedData((prevSelectedData) => [...prevSelectedData, productId]);
    }
  };
  const deleteSelectedData = (productId: number) => {
    setSelectedData((prevSelectedData) =>
      prevSelectedData.filter((id) => id !== productId)
    );
  };

  


  const values = {
    headPhones,
    wireless,
    selectedData,
    addSelectedData,
    deleteSelectedData,
  };
  console.log(selectedData);
  return (
    <>
      <ProductContext.Provider value={values}>
        <Routes>
          <Route path="/" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
