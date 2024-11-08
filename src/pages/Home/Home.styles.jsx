import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #857ab4;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10%;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    margin-top: 4%;
  }

  @media (min-width: 1400px) {
    margin-top: 5%;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 390px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    height: 450px;
  }

  @media (min-width: 1400px) {
    height: 600px;
  }
`;

export const NewPokemonBtn = styled.button`
  height: 2rem;
  width: 10rem;
  border-radius: 8px;
  border: 2px solid #000000;
  font-size: 0.9rem;
  font-weight: bolder;
  background-color: #d1be0f;
`;
