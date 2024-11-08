import React, { useState } from "react";
import { usePokemonData } from "../usePokemonData";
import {
  ContainerCard,
  ContainerImagemCard,
  ImagePokemon,
  Nome,
  Hp,
  ContainerNomeHp,
  HpDiv,
  HpTexto,
  Attack,
  Defense,
  SpecialAttack,
  SpecialDefense,
  ContainerTextoPoder,
  PoderDiv,
} from "./Card.style";

export default function Card() {
  const [id] = useState(Math.floor(Math.random() * 600) + 1);
  console.log(id);

  const [pokemonData, setPokemonData] = useState(null);

  usePokemonData(id, setPokemonData);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const primeiraLetraMaiuscula = (l) => {
    return l.charAt(0).toUpperCase() + l.slice(1);
  };

  return (
    <>
      <ContainerCard type={pokemonData.type}>
        <ContainerNomeHp>
          <Nome>{primeiraLetraMaiuscula(pokemonData.name)}</Nome>
          <HpDiv>
            <HpTexto>HP</HpTexto>
            <Hp>{pokemonData.hp}</Hp>
          </HpDiv>
        </ContainerNomeHp>
        <ContainerImagemCard>
          <ImagePokemon src={pokemonData.image} alt={pokemonData.name} />
        </ContainerImagemCard>
        <ContainerTextoPoder>
          <PoderDiv>
            <Attack>Attack:</Attack>
            <Attack>{pokemonData.attack}</Attack>
          </PoderDiv>
          <PoderDiv>
            <Defense>Defense:</Defense>
            <Defense>{pokemonData.defense}</Defense>
          </PoderDiv>
          <PoderDiv>
            <SpecialAttack>Special Attack:</SpecialAttack>
            <SpecialAttack>{pokemonData.specialAttack}</SpecialAttack>
          </PoderDiv>
          <PoderDiv>
            <SpecialDefense>Special Defense:</SpecialDefense>
            <SpecialDefense>{pokemonData.specialDefense}</SpecialDefense>
          </PoderDiv>
        </ContainerTextoPoder>
      </ContainerCard>
    </>
  );
}
