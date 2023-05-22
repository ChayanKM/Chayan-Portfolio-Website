import React, { useState, Children } from "react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import "./hobbies.css"
import "./lvideos.css"

import Video100 from "../../assets/videos/100.mp4"

const SHOW_MAX_IMG = 1;
const ALL_CARDS = [
  {
    vid: Video100,
  },
]

const Cartao = ({ vid }) => (
    <div className="cartao">
      <div>{vid}</div>
    </div>
  );
  
  const Carrosel = ({ children }) => {
    const [video, setVideo] = useState(0);
    const CARDS = ALL_CARDS.length;
  
    return (
      <div className="carrosel-geral">
        {video > 0 && (
          <button
            className="navegacao esquerda"
            onClick={() => setVideo((i) => i - 1)}
          >
            <TiChevronLeft  />
          </button>
        )}
        {Children.map(children, (elementoFilho, i) => (
          <div
            className="lvideo__card"
            key={i}
            style={{
              "--video": i === video ? 1 : 0,
              "--compensacao": (video - i) / 3,
              "--direcao": Math.sign(video - i),
              "--abs-compensacao": Math.abs(video - i) / 2,
              pointerEvents: video === i ? "auto" : "none",
              opacity:
                Math.abs(video - i) >= SHOW_MAX_IMG ? "0" : "1",
              display:
                Math.abs(video - i) > SHOW_MAX_IMG ? "none" : "block",
            }}
          >
            {elementoFilho}
          </div>
        ))}
        {video < CARDS - 1 && (
          <button
            className="navegacao direita"
            onClick={() => setVideo((i) => i + 1)}
          >
            <TiChevronRight />
          </button>
        )}
      </div>
    );
  };
const LVideos = () => {
  return (
    <div className="app">
    <Carrosel>
      {ALL_CARDS.map((_, i) => (
        <Cartao
          key={i}
          video={ALL_CARDS[i].vid}
        />
      ))}
    </Carrosel>
  </div>
  )
}

export default LVideos