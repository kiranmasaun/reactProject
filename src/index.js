import React from "react";
// import ReactDOM from "react-dom"; /* React-dom is deprecated now we will use createRoot */
import { createRoot } from "react-dom/client";
// import App from "./App";
// import Customers from "./Customers";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
// import Counter from "./Counter";
// import News from "./News";
// import ClassComponent from "./Components/ClassComponent";
// import FunctionComponent from "./Components/FunctionComponent";
// import Game from "./Components/Game/Game";
import Products from "./Components/Products/Products";
import ProductList from "./Components/Products/ProductList";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Products products={ProductList} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
