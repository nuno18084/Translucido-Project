import React from "react";
import "./WordSlider.css";
// import Marquee from "react-fast-marquee";

const WordSlider = () => {
  const words = ["Ouvir", "Respeitar", "Refletir", "Intervir"];
  const animationDuration = words.length * 10;

  return (
    <div className="marquee-container">
      <div
        className="marquee-words"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {words.map((word, index) => (
          <span key={index} className="marquee-word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordSlider;
