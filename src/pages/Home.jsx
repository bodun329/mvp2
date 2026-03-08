import { useEffect, useState } from "react";
import "../styles/Home.css";
import { useFavorites } from "../context/FavoritesContext";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const data = await res.json();
        setPokemonList(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading Pokémon...</p>;

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Pokémon Explorer</h1>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="pokemon-grid">
        {filteredPokemon.map((pokemon, index) => (
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
              className={favorites.find(f => f.name === pokemon.name) ? "fav-btn active" : "fav-btn"}
            >
              {favorites.find(f => f.name === pokemon.name) ? "★ Favorited" : "☆ Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;