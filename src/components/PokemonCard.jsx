import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => (
  <div
    style={{
      border: "2px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px",
      width: "150px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transition: "transform 0.2s"
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
  >
    <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
    <Link to={`/pokemon/${pokemon.name}`}>View Details</Link>
  </div>
);

export default PokemonCard;