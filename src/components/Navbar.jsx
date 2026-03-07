import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{
    padding: "10px 20px",
    background: "#ef5350",
    color: "white",
    display: "flex",
    alignItems: "center"
  }}>
    <Link
      to="/"
      style={{ marginRight: "15px", color: "white" }}
      onMouseEnter={e => e.target.style.color="#ffeb3b"}
      onMouseLeave={e => e.target.style.color="white"}
    >
      Home
    </Link>
    <Link
      to="/pokemon"
      style={{ color: "white" }}
      onMouseEnter={e => e.target.style.color="#ffeb3b"}
      onMouseLeave={e => e.target.style.color="white"}
    >
      Pokémon List
    </Link>
  </nav>
);

export default Navbar;