import React from "react";
import "./WordSlider.css";

const WordSlider = () => {
  const words = ["Ouvir", "Respeitar", "Refletir", "Intervir"]; // Add your words here

  return (
    <div className="marquee-container">
      <div className="marquee-words">
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
