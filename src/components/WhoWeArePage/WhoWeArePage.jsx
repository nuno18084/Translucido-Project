import React from "react";
import "./WhoWeArePage.css";
import Ana from "../../Assets/WhoWeAreAssets/AnaSofiaPic.png";
import Rita from "../../Assets/WhoWeAreAssets/RitaFerreiraPic.png";
import LinkedIn from "../../Assets/FooterAssets/LinkedIn.png";
import { Link } from "react-router-dom";

const WhoWeArePage = () => {
  return (
    <div className="who-main-container">
      <div className="who-first-container">
        <div>
          <h1>Quem Somos</h1>
        </div>
        <div>
          <p>
            A Translúcido dedica-se exclusivamente à empatia, à sua explicação
            científica e às suas potencialidades, promovendo relações empáticas,
            em diferentes ambientes, por meio de treino e consultadoria. Visamos
            capacitar a pessoa nas suas relações interpessoais.
          </p>
        </div>
        <Link to="/metodologias">
          <div>
            <button className="who-btn">Saber Mais</button>
          </div>
        </Link>
      </div>
      <div className="who-pics-section">
        <div className="who-ana-pic">
          <div>
            <img src={Ana} alt="Ana-pic" className="her-pic" />
          </div>
          <div className="who-name-linkedin">
            <div>
              <h5>Ana Sofia</h5>
            </div>
            <Link
              to="https://www.linkedin.com/in/ana-sofia-da-fonseca/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <img
                  src={LinkedIn}
                  alt="linkedin-ana"
                  className="linkedin-who"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="who-rita-pic">
          <div>
            <img src={Rita} alt="Rita-pic" className="her-pic" />
          </div>
          <div className="who-name-linkedin">
            <div>
              <h5>Rita Ferreira</h5>
            </div>
            <Link
              to="https://www.linkedin.com/in/ritacabralferreira/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <img
                  src={LinkedIn}
                  alt="linkedin-rita"
                  className="linkedin-who"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;
