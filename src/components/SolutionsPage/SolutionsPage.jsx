import React from "react";
import "./SolutionsPage.css";
import eclipse from "../../Assets/SolutionsPage/SolutionsEclipse.png";
import SolutionsCartoon from "../../Assets/SolutionsPage/SolutionsCartoon.png";

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
    </div>
  );
};

export default SolutionsPage;
