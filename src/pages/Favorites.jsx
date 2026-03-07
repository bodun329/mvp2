import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p>You have no favorites yet. Go add some!</p>
      ) : (
        <ul>
          {favorites.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;