import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/api";
import Loading from "../components/Loading";
import { useFavorites } from "../context/FavoritesContext";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetchPokemonDetail(name)
      .then(setPokemon)
      .catch(() => setError("Failed to load Pokémon"));
  }, [name]);

  if (error) return <p>{error}</p>;
  if (!pokemon) return <Loading />;

  const isFavorite = favorites.includes(pokemon.name);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "150px", height: "150px", imageRendering: "pixelated" }}
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button
        style={{
          padding: "8px 15px",
          marginTop: "10px",
          background: "#ef5350",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.2s"
        }}
        onMouseEnter={e => e.target.style.background="#d32f2f"}
        onMouseLeave={e => e.target.style.background="#ef5350"}
        onClick={() => toggleFavorite(pokemon.name)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default PokemonDetail;