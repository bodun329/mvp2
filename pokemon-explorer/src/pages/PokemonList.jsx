import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/api";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonList(50).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pokemon.map((p) => (
        <PokemonCard key={p.name} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;