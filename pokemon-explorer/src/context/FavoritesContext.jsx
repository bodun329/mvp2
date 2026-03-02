import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    if (!favorites.find((fav) => fav.name === pokemon.name)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  const removeFavorite = (name) => {
    setFavorites(favorites.filter((fav) => fav.name !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}