import { styled } from "styled-components";

const fundos = [
  {
    background:
      "linear-gradient(135deg, #A8A77A 25%, #C6C6A7 50%, #A8A77A 95%)",
    border: "5px solid #6D6D4E",
  },
  {
    background:
      "linear-gradient(135deg, #EE8130 25%, #FF9D55 50%, #D64A1A 95%)",
    border: "5px solid #B22222",
  },
  {
    background:
      "linear-gradient(135deg, #6390F0 25%, #76BEFE 50%, #1E8FEF 95%)",
    border: "5px solid #1E3A8A",
  },
  {
    background:
      "linear-gradient(135deg, #7AC74C 25%, #9BCC50 50%, #4E8234 95%)",
    border: "5px solid #355E3B",
  },
  {
    background:
      "linear-gradient(135deg, #F7D02C 25%, #FFD700 50%, #E0B914 95%)",
    border: "5px solid #B8860B",
  },
  {
    background:
      "linear-gradient(135deg, #96D9D6 25%, #BCE6E6 50%, #73CEC0 95%)",
    border: "5px solid #5A9EA8",
  },
  {
    background:
      "linear-gradient(135deg, #C22E28 25%, #D56723 50%, #A52A2A 95%)",
    border: "5px solid #8B3A3A",
  },
  {
    background:
      "linear-gradient(135deg, #A33EA1 25%, #B667CE 50%, #6B2E6D 95%)",
    border: "5px solid #582A72",
  },
  {
    background:
      "linear-gradient(135deg, #E2BF65 25%, #C2A233 50%, #8B6F3D 95%)",
    border: "5px solid #5C4A1F",
  },
  {
    background:
      "linear-gradient(135deg, #A98DFF 25%, #A6C8FF 50%, #77A6F7 95%)",
    border: "5px solid #4A70A7",
  },
  {
    background:
      "linear-gradient(135deg, #6F4F97 25%, #9B79D2 50%, #6A3D9C 95%)",
    border: "5px solid #4B2A80",
  },
  {
    background:
      "linear-gradient(135deg, #A8B822 25%, #C9D226 50%, #8EAA1F 95%)",
    border: "5px solid #6B7A13",
  },
  {
    background:
      "linear-gradient(135deg, #B8A038 25%, #A69F30 50%, #7C6E29 95%)",
    border: "5px solid #5C4A27",
  },
  {
    background:
      "linear-gradient(135deg, #6F4F97 25%, #9B79D2 50%, #3B2D63 95%)",
    border: "5px solid #2C1E44",
  },
  {
    background:
      "linear-gradient(135deg, #6F35A5 25%, #9B4F96 50%, #D42B56 95%)",
    border: "5px solid #9A1B4D",
  },
  {
    background:
      "linear-gradient(135deg, #4B3F72 25%, #6A4C91 50%, #2F2340 95%)",
    border: "5px solid #1D1B2D",
  },
  {
    background:
      "linear-gradient(135deg, #B7B7B7 25%, #A1A1A1 50%, #8C8C8C 95%)",
    border: "5px solid #4D4D4D",
  },
  {
    background:
      "linear-gradient(135deg, #F4A6D7 25%, #F8B4D9 50%, #F3A7D3 95%)",
    border: "5px solid #D08CC1",
  },
  {
    background:
      "linear-gradient(135deg, #e5e5e599 25%, #b3b3b3 50%, #e5e5e5 95%)",
    border: "5px solid #4e4e4ec8",
  },
  {
    background:
      "linear-gradient(135deg, #ffd700 0%, #ffc200 50%, #ffb700 100%)",
    border: "5px solid #4e4e4ec8",
  },
  {
    background:
      "linear-gradient(135deg, #cd7f32 0%, #a97142 50%, #6d4c32 100%)",
    border: "5px solid #5252528f",
  },
];

const getStyleByType = (type) => {
  switch (type) {
    case "normal":
      return fundos[0];
    case "fire":
      return fundos[1];
    case "water":
      return fundos[2];
    case "grass":
      return fundos[3];
    case "eletric":
      return fundos[4];
    case "ice":
      return fundos[5];
    case "poison":
      return fundos[6];
    case "flying":
      return fundos[7];
    case "psychic":
      return fundos[8];
    case "bug":
      return fundos[9];
    case "rock":
      return fundos[10];
    case "ghost":
      return fundos[11];
    case "dragon":
      return fundos[12];
    case "dark":
      return fundos[13];
    case "steel":
      return fundos[14];
    case "fairy":
      return fundos[15];
    default:
      return fundos[16];
  }
};

export const ImagePokemon = styled.img`
  @media (max-width: 768px) {
    height: 80px;
    object-fit: contain;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1400px) {
    width: 170px;
    height: 170px;
  }
`;

export const ContainerCard = styled.div`
  ${({ type }) => {
    const { background, border } = getStyleByType(type);
    return `
      background: ${background};
      border: ${border};
    `;
  }}

  @media (max-width: 768px) {
    width: 200px;
    height: 350px;
    padding: 20px 12px 40px 12px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    width: 275px;
    height: 425px;
    padding: 25px 18px 30px 18px;
  }

  @media (min-width: 1400px) {
    width: 350px;
    height: 500px;
    padding: 30px 20px 40px 20px;
  }
  margin: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 15px;
  text-align: center;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
  margin: 20px;
  z-index: 10;
  border-radius: 5% / 3.5%;
  box-shadow: -10px -10px 20px -5px rgb(212, 218, 219),
    10px -10px 20px -5px rgb(212, 218, 219),
    10px 10px 20px -5px rgb(212, 218, 219),
    -10px 10px 20px -5px rgb(212, 218, 219), -7px -7px 10px -5px transparent,
    7px 7px 10px -5px transparent, 0 0 5px 0px rgba(255, 255, 255, 0),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);

  transition: transform 0.5s ease, box-shadow 0.2s ease;
  transform-origin: center;

  &:hover {
    transform: perspective(600px) rotateY(10deg) rotateX(5deg) scale(1.05);
    animation: correrBorda 2s infinite linear;
  }

  @keyframes correrBorda {
    0% {
      box-shadow: -25px -20px 50px -20px rgba(0, 231, 255, 0.8),
        25px 20px 50px -20px rgba(255, 0, 230, 0.8),
        -7px -7px 15px -5px rgba(0, 231, 255, 0.5),
        7px 7px 15px -5px rgba(255, 0, 230, 0.3),
        0 0 20px 6px rgba(255, 255, 255, 0.6),
        0 60px 40px -20px rgba(0, 0, 0, 0.5);
    }
    25% {
      box-shadow: 25px -20px 50px -20px rgba(0, 231, 255, 0.8),
        -25px 20px 50px -20px rgba(255, 0, 230, 0.8),
        7px -7px 15px -5px rgba(0, 231, 255, 0.5),
        -7px 7px 15px -5px rgba(255, 0, 230, 0.3),
        0 0 20px 6px rgba(255, 255, 255, 0.6),
        0 60px 40px -20px rgba(0, 0, 0, 0.5);
    }
    50% {
      box-shadow: 25px 20px 50px -20px rgba(0, 231, 255, 0.8),
        -25px -20px 50px -20px rgba(255, 0, 230, 0.8),
        7px 7px 15px -5px rgba(0, 231, 255, 0.5),
        -7px -7px 15px -5px rgba(255, 0, 230, 0.3),
        0 0 20px 6px rgba(255, 255, 255, 0.6),
        0 60px 40px -20px rgba(0, 0, 0, 0.5);
    }
    75% {
      box-shadow: -25px 20px 50px -20px rgba(0, 231, 255, 0.8),
        25px -20px 50px -20px rgba(255, 0, 230, 0.8),
        -7px 7px 15px -5px rgba(0, 231, 255, 0.5),
        7px -7px 15px -5px rgba(255, 0, 230, 0.3),
        0 0 20px 6px rgba(255, 255, 255, 0.6),
        0 60px 40px -20px rgba(0, 0, 0, 0.5);
    }
    100% {
      box-shadow: -25px -20px 50px -20px rgba(0, 231, 255, 0.8),
        25px 20px 50px -20px rgba(255, 0, 230, 0.8),
        -7px -7px 15px -5px rgba(0, 231, 255, 0.5),
        7px 7px 15px -5px rgba(255, 0, 230, 0.3),
        0 0 20px 6px rgba(255, 255, 255, 0.6),
        0 60px 40px -20px rgba(0, 0, 0, 0.5);
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    mix-blend-mode: color-dodge;
    transition: all 0.33s ease;
  }

  &::before {
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      rgb(0, 231, 255) 25%,
      transparent 47%,
      transparent 53%,
      rgb(255, 0, 231) 75%,
      transparent 100%
    );
    opacity: 0.5;
    filter: brightness(0.5) contrast(1);
    z-index: 1;
  }

  &::after {
    background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
      url("https://assets.codepen.io/13471/holo.png"),
      linear-gradient(
        125deg,
        #ff008450 15%,
        #fca40040 30%,
        #ffff0030 40%,
        #00ff8a20 60%,
        #00cfff40 70%,
        #cc4cfa50 85%
      );
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    opacity: 0.75;
    filter: brightness(1) contrast(1);
    z-index: 2;
  }
`;

export const ContainerImagemCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Nome = styled.h1`
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 25px;
  }
`;

export const HpDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const HpTexto = styled.h5`
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-right: 3px;
    font-size: 8px;
    margin-top: 18px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 11px;
    margin-top: 28px;
  }
  @media (min-width: 1400px) {
    font-size: 13px;
    margin-top: 34px;
  }
`;

export const Hp = styled.h1`
  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    font-size: 25px;
  }
`;

export const ContainerNomeHp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTextoPoder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Attack = styled.p`
  margin-bottom: 0;
`;

export const Defense = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const SpecialAttack = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const SpecialDefense = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export const PoderDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 10px;
    font-size: 12px;
  }

  @media (min-width: 769px) and (max-width: 1399px) {
    padding: 0 20px;
  }

  @media (min-width: 1400px) {
    padding: 0 30px;
  }
`;
