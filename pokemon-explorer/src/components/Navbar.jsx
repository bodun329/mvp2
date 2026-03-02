import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#ef5350", color: "white" }}>
    <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
    <Link to="/pokemon" style={{ color: "white" }}>Pokémon List</Link>
  </nav>
);

export default Navbar;