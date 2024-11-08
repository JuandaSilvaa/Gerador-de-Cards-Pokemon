import React, { useState } from "react";
import Card from "../../components/Card";
import {
  Container,
  ContainerButton,
  ContainerCard,
  NewPokemonBtn,
} from "./Home.styles";

export default function Home() {
  const [key, setKey] = useState(0);
  const handleReloadPokemon = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <Container>
      <ContainerCard>
        <Card key={key} />
      </ContainerCard>
      <ContainerButton>
        <NewPokemonBtn onClick={handleReloadPokemon}>
          Gerar novo Pokemon
        </NewPokemonBtn>
      </ContainerButton>
    </Container>
  );
}
