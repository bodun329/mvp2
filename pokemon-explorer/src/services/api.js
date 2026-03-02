export async function fetchPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  if (!response.ok) throw new Error("Failed to fetch Pokemon");
  return response.json();
}

export async function fetchPokemonDetail(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) throw new Error("Failed to fetch Pokemon details");
  return response.json();
}