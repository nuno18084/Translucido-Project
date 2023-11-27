import React from "react";
import "./SolutionsSection.css";
import SolutionsCards from "./SolutionsCards/SolutionsCards";

const SolutionsSection = () => {
  return (
    <div className="solutions-main-container">
      <div>
        <h1>Soluções</h1>
      </div>
      <div className="solutions-p-container">
        <p>
          Procura pelos melhores serviços de psicologia, sem longas esperas?
          Agende uma consulta e está feito! Basta reservar um horário,
          comparecer na hora marcada e receber atendimento de qualidade.
        </p>
      </div>
      <div>
        <SolutionsCards />
      </div>
    </div>
  );
};

export default SolutionsSection;
