import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Categories from "./router/Categories";
import Gifting from "./router/Gifting";
import About from "./router/About";
import Products from "./router/Products";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/categories" element = {<Categories/>}/>
      <Route path="/products" element = {<Products/>}/>
      <Route path="/gifting" element = {<Gifting/>}/>
      <Route path="/about" element = {<About/>}/>
     </Routes>
    </>
  );
}

export default App;
