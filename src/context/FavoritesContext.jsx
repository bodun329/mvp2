import { createContext, useContext, useState } from "react";

// Create context
export const FavoritesContext = createContext();

// Provider component
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (pokemonName) => {
    setFavorites((prev) =>
      prev.includes(pokemonName)
        ? prev.filter((name) => name !== pokemonName)
        : [...prev, pokemonName]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook for easier access
export function useFavorites() {
  return useContext(FavoritesContext);
}