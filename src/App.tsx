import React from "react";
import "./App.css";
import LayoutFirst from "./component/LayoutFirst";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <LayoutFirst />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
