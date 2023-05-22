import React, { useState, Children } from "react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import "./hobbies.css"
import "./fsketch.css"


import Sketch1 from "../../assets/sketch/Sketch1.jpeg"
import Sketch2 from "../../assets/sketch/Sketch2.jpeg"
import Sketch3 from "../../assets/sketch/Sketch3.jpeg"
import Sketch4 from "../../assets/sketch/Sketch4.jpeg"
import Sketch5 from "../../assets/sketch/Sketch5.jpeg"
import Sketch6 from "../../assets/sketch/Sketch6.jpeg"
import Sketch7 from "../../assets/sketch/Sketch7.jpeg"
import Sketch8 from "../../assets/sketch/Sketch8.jpeg"
import Sketch9 from "../../assets/sketch/Sketch9.jpeg"
import Sketch10 from "../../assets/sketch/Sketch10.jpeg"
import Sketch11 from "../../assets/sketch/Sketch11.jpeg"
import Sketch12 from "../../assets/sketch/Sketch12.jpeg"
import Sketch13 from "../../assets/sketch/Sketch13.jpeg"
import Sketch14 from "../../assets/sketch/Sketch14.jpeg"
import Sketch15 from "../../assets/sketch/Sketch15.jpeg"
import Sketch16 from "../../assets/sketch/Sketch16.jpeg"
import Sketch17 from "../../assets/sketch/Sketch17.jpeg"
import Sketch18 from "../../assets/sketch/Sketch18.jpeg"
import Sketch19 from "../../assets/sketch/Sketch19.jpeg"
import Sketch20 from "../../assets/sketch/Sketch20.jpeg"

const SHOW_MAX_IMG = 3;
const ALL_CARDS = [
  {
    img: Sketch1,
  },
  {
    img: Sketch2,
  },
  {
    img: Sketch3,
  },
  {
    img: Sketch4,
  },
  {
    img: Sketch5,
  },
  {
    img: Sketch6,
  },
  {
    img: Sketch7,
  },
  {
    img: Sketch8,
  },
  {
    img: Sketch9,
  },
  {
    img: Sketch10,
  },
  {
    img: Sketch11,
  },
  {
    img: Sketch12,
  },
  {
    img: Sketch13,
  },
  {
    img: Sketch14,
  },
  {
    img: Sketch15,
  },
  {
    img: Sketch16,
  },
  {
    img: Sketch17,
  },
  {
    img: Sketch18,
  },
  {
    img: Sketch19,
  },
  {
    img: Sketch20,
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
          className="friend__card"
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

const FSketch = () => {
  return(
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

export default FSketch