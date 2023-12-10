import React from "react";
import "./WhoWeAreSection.css";
import { Link } from "react-router-dom";

const WhoWeAreSection = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            em diferentes ambientes, por meio de treino e consultoria. Visamos
            capacitar a pessoa nas suas relações interpessoais.
          </p>
        </div>
      </div>
      <div className="who-we-are-btns">
        <div>
          <Link to="/metodologias" onClick={handleLinkClick}>
            <button className="who-we-are-btn-left">Saber Mais</button>
          </Link>
        </div>
        <div>
          <Link to="/agendar" onClick={handleLinkClick}>
            <button className="who-we-are-btn-right">Agendar Reunião</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhoWeAreSection;
