import React, { useState, Children } from "react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import "./hobbies.css"
import "./csketch.css"


import Sketch101 from "../../assets/sketch/sketch1.1.jpg"
import Sketch102 from "../../assets/sketch/sketch1.2.jpg"
import Sketch103 from "../../assets/sketch/sketch1.3.jpg"
import Sketch104 from "../../assets/sketch/sketch1.4.jpg"
import Sketch105 from "../../assets/sketch/sketch1.5.jpg"
import Sketch106 from "../../assets/sketch/sketch1.6.jpg"
import Sketch107 from "../../assets/sketch/sketch1.7.jpg"
import Sketch108 from "../../assets/sketch/sketch1.8.jpg"
import Sketch109 from "../../assets/sketch/sketch1.9.jpg"
import Sketch110 from "../../assets/sketch/sketch1.10.jpeg"

const SHOW_MAX_IMG = 3;
const ALL_CARDS = [
  {
    img: Sketch101,
  },
  {
    img: Sketch102,
  },
  {
    img: Sketch103,
  },
  {
    img: Sketch104,
  },
  {
    img: Sketch105,
  },
  {
    img: Sketch106,
  },
  {
    img: Sketch107,
  },
  {
    img: Sketch108,
  },
  {
    img: Sketch109,
  },
  {
    img: Sketch110,
  },
  
]

const Cartao = ({ img }) => (
  <div className="cartao">
    <div>{img}</div>
  </div>
);

const Carrosel = ({ children }) => {
  const [sketch, setSketch] = useState(0);
  const CARDS = ALL_CARDS.length;

  return (
    <div className="carrosel-geral">
      {sketch > 0 && (
        <button
          className="navegacao esquerda"
          onClick={() => setSketch((i) => i - 1)}
        >
          <TiChevronLeft  />
        </button>
      )}
      {Children.map(children, (elementoFilho, i) => (
        <div
          className="celebrity__card"
          key={i}
          style={{
            "--sketch": i === sketch ? 1 : 0,
            "--compensacao": (sketch - i) / 3,
            "--direcao": Math.sign(sketch - i),
            "--abs-compensacao": Math.abs(sketch - i) / 2,
            pointerEvents: sketch === i ? "auto" : "none",
            opacity:
              Math.abs(sketch - i) >= SHOW_MAX_IMG ? "0" : "1",
            display:
              Math.abs(sketch - i) > SHOW_MAX_IMG ? "none" : "block",
          }}
        >
          {elementoFilho}
        </div>
      ))}
      {sketch < CARDS - 1 && (
        <button
          className="navegacao direita"
          onClick={() => setSketch((i) => i + 1)}
        >
          <TiChevronRight />
        </button>
      )}
    </div>
  );
};

const CSketch = () => {
  return (
    <div className="app">
    <Carrosel>
      {ALL_CARDS.map((_, i) => (
        <Cartao
          key={i}
          sketch={ALL_CARDS[i].img}
        />
      ))}
    </Carrosel>
  </div>
  )
}

export default CSketch