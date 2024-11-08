import axios from "axios";
import { useEffect } from "react";

export function usePokemonData(id, setPokemonData) {
  const getPokemon = () => {
    if (id) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
          savePokemon(response);
        })
        .catch((error) => console.error("Erro ao buscar dados", error));
    }
  };

  const savePokemon = (response) => {
    setPokemonData({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      specialAttack: response.data.stats[3].base_stat,
      specialDefense: response.data.stats[4].base_stat,
      type: response.data.types[0].type.name,
    });
  };

  useEffect(() => {
    getPokemon();
  }, [id]);
}
