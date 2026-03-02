import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;