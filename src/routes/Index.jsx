import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";
import PokemonDetails from "../pages/PokemonDetails";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
};

export default RoutesIndex;
