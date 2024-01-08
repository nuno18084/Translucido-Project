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
          Procura por respostas empáticas e promotoras de empatia? Agende
          connosco! Basta marcar dia e hora e contar-nos a sua necessidade
        </p>
      </div>
      <div>
        <SolutionsCards />
      </div>
    </div>
  );
};

export default SolutionsSection;
