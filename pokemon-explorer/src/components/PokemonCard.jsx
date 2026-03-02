import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <h3>{pokemon.name}</h3>
    <Link to={`/pokemon/${pokemon.name}`}>View Details</Link>
  </div>
);

export default PokemonCard;