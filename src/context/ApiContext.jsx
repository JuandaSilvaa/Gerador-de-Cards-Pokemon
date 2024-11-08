import React, { createContext, useState } from "react";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <ApiContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </ApiContext.Provider>
  );
}
