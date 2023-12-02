import React from "react";
import "./SolutionsPage.css";
import eclipse from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsEclipse.png";
import SolutionsCartoon from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsCartoon.png";

const SolutionsPage = () => {
  return (
    <div>
      <div className="solutions-main-container">
        <div className="solutions-first-container">
          <img src={eclipse} alt="eclipse" className="solutions-eclipse" />
        </div>
        <div className="solutions-center-container">
          <div>
            <h1 className="solutions-h1">Soluções</h1>
          </div>
          <div>
            <img
              src={SolutionsCartoon}
              alt="solutions-cartoon"
              className="solutions-cartoon"
            />
          </div>
          <div>
            <button className="solutions-btn">Ver Soluções</button>
          </div>
        </div>
        <div>
          <img src={eclipse} alt="eclipse" className="solutions-eclipse" />
        </div>
      </div>

      <div className="solutions-second-container">
        <div>
          <p>
            Transforme o seu ambiente e as relações, com a empatia como
            catalisador de mudanças positivas.
          </p>
        </div>
        <div>
          <p>
            Dedicamo-nos a aprimorar o ambiente e cultura da sua organização, a
            fim de que todos atinjam níveis positivos de bem-estar e satisfação,
            desejáveis à persecução dos objetivos a que se propõem.
          </p>
        </div>
        <div>
          <p>
            A Direcção Geral da Saúde (2021), considera a Saúde Psicológica e o
            bem-estar como um dos melhores investimentos para as organizações
            que se queiram manter sustentáveis, produtivas e competitivas.
          </p>
        </div>
      </div>

      <div className="solutions-third-container">
        <div>
          <p>
            Dedicamo-nos a aprimorar o ambiente e cultura da sua organização, a
            fim de que todos atinjam níveis positivos de bem-estar e satisfação,
            desejáveis à persecução dos objetivos a que se propõem.
          </p>
        </div>
        <div>
          <p>
            A Direcção Geral da Saúde (2021), considera a Saúde Psicológica e o
            bem-estar como um dos melhores investimentos para as organizações
            que se queiram manter sustentáveis, produtivas e competitivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
