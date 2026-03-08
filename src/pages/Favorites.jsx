import { useFavorites } from "../context/FavoritesContext";
import "../styles/Home.css";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>No favorites yet!</p>;

  return (
    <div className="home-container">
      <h1>My Favorite Pokémon</h1>
      <div className="pokemon-grid">
        {favorites.map((pokemon, index) => (
          <div key={pokemon.name} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
            <p style={{ textTransform: "capitalize", fontWeight: "bold" }}>
              {pokemon.name}
            </p>
            <button
              onClick={() => toggleFavorite(pokemon)}
              className="fav-btn active"
            >
              ★ Remove Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;