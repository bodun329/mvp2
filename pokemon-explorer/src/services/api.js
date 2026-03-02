const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit = 20) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results;
};

export const fetchPokemonDetail = async (name) => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  const data = await res.json();
  return data;
};