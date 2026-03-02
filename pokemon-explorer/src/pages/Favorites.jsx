import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) =>
      prev.includes(pokemon)
        ? prev.filter((p) => p !== pokemon)
        : [...prev, pokemon]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);