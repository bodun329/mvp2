import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/api";
import Loading from "../components/Loading";
import { useFavorites } from "../context/FavoritesContext";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetchPokemonDetail(id).then(setPokemon);
  }, [id]);

  if (!pokemon) return <Loading />;

  const isFavorite = favorites.includes(pokemon.name);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={() => toggleFavorite(pokemon.name)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default PokemonDetail;