import React from "react";
import "./WordSlider.css";

const WordSlider = () => {
  const words = ["Ouvir", "Respeitar", "Refletir", "Intervir"]; // Add your words here

  return (
    <div className="marquee-container">
      {words.map((word, index) => (
        <h1 key={index} className="marquee-word">
          {word}
        </h1>
      ))}
    </div>
  );
};

export default WordSlider;
