import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((p) => (
          <div key={p.name}>
            <p>{p.name}</p>
            <button onClick={() => removeFavorite(p.name)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;