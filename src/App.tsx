import React from "react";
import "./App.css";
import Checkout from "./pages/Checkout";
import { ProductsProvider } from "./contexts/products.context";
import { AddressProvider } from "./contexts/address.context";

function App() {
  return (
    <ProductsProvider>
      <AddressProvider>
        <Checkout />
      </AddressProvider>
    </ProductsProvider>
  );
}

export default App;
