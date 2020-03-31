import React from "react";
import ReactDOM from "react-dom";

import ShoppingCartApp from "./components/shopping-cart-app";
import { shoppingProducts } from "./components/shopping-products";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartApp items={shoppingProducts} />
  </React.StrictMode>,
  document.getElementById("root")
);
