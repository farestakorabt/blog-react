import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
