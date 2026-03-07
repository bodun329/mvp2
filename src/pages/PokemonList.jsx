import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList } from "../services/api";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemonList()
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Pokemon List</h2>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link to={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;