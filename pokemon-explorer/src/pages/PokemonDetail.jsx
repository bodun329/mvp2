import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchPokemonDetail } from "../services/api";
import { FavoritesContext } from "../context/FavoritesContext";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetchPokemonDetail(name).then(setPokemon);
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
    </div>
  );
}

export default PokemonDetail;