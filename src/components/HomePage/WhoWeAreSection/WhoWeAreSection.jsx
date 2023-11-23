import React from "react";
import "./WhoWeAreSection.css";

const WhoWeAreSection = () => {
  return (
    <>
      <div className="who-we-are-main-section">
        <div>
          <h1>Quem somos</h1>
        </div>
        <div>
          <p>
            A Translúcido dedica-se exclusivamente à empatia, à sua explicação
            científica e às suas potencialidades, promovendo relações empáticas,
            em diferentes ambientes, por meio de treino e consultadoria. Visamos
            capacitar a pessoa nas suas relações interpessoais.
          </p>
        </div>
      </div>
      <div className="who-we-are-btns">
        <div>
          <button className="who-we-are-btn-left">Saber Mais</button>
        </div>
        <div>
          <button className="who-we-are-btn-right">Agender Reunião</button>
        </div>
      </div>
    </>
  );
};

export default WhoWeAreSection;
