import React from "react";
import "./WhoWeArePage.css";
import Ana from "../../Assets/WhoWeAreAssets/AnaSofiaPic.png";
import Rita from "../../Assets/WhoWeAreAssets/RitaFerreiraPic.png";
import LinkedIn from "../../Assets/FooterAssets/LinkedIn.png";
import { Link } from "react-router-dom";
import TranslucidoPic from "../../Assets/WhoWeAreAssets/WhoWeAreCartoon.png";
import ArrowMax from "../../Assets/WhoWeAreAssets/WhoWeAreArrow.png";
import doubleQuotes from "../../Assets/WhoWeAreAssets/DoubleQuotes.png";
import Eclipse from "../../Assets/HomePage/LandingAssets/WhoWeAreFigs/EllipseRight.png";
import ListItem from "../../Assets/WhoWeAreAssets/ListItem.png";

const WhoWeArePage = () => {
  return (
    <>
      <div className="who-main-container">
        <div className="who-first-container">
          <div>
            <h1>Quem Somos</h1>
          </div>
          <div>
            <p>
              A Translúcido dedica-se exclusivamente à empatia, à sua explicação
              científica e às suas potencialidades, promovendo relações
              empáticas, em diferentes ambientes, por meio de treino e
              consultadoria. Visamos capacitar a pessoa nas suas relações
              interpessoais.
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

      <div className="who-second-container">
        <div>
          <h1 className="translucido-h1">A Translúcido</h1>
        </div>
        <div className="translucido-p-section">
          <div>
            <p>
              Somos uma equipa de profissionais de psicologia,orientados para o
              desenvolvimento da empatia. A Translúcido dedica-se exclusivamente
              à capacidade empática, à sua explicação científica e às suas
              potencialidades, promovendo relações empáticas, em diferentes
              ambientes, por meio de treino e consultadoria.{" "}
            </p>
          </div>
          <div>
            <p>
              Visamos capacitar a pessoa nas suas relações interpessoais,
              criando mudanças com resultados tangíveis e duradouros e impacto
              financeiro e emocional. Os nossos conhecimentos combinados da
              psicologia e prática clínica formam a base sólida para os nossos
              serviços de consultadoria e treino.
            </p>
          </div>
          <div>
            <img src={ArrowMax} alt="arrow-max" className="arrow-max" />
          </div>
        </div>
        <div>
          <img
            src={TranslucidoPic}
            alt="Translucido-pic"
            className="Translucido-pic"
          />
        </div>
      </div>

      <div className="who-third-container">
        <div>
          <img
            src={doubleQuotes}
            alt="double-quotes"
            className="double-quotes"
          />
        </div>
        <div>
          <h2>
            Profissionalmente, crescida na área social. Pessoalmente, em
            movimentos de promoção do trabalho em equipa, do respeito pelo outro
            e pelo ambiente.
          </h2>
        </div>
        <div>
          <img
            src={doubleQuotes}
            alt="double-quotes"
            className="double-quotes double-quotes-last"
          />
        </div>
      </div>

      <div className="who-forth-container">
        <div className="who-forth-container-p">
          <div>
            <p>
              Percebemos que se a criatividade e inovação eram importantíssimas
              na afirmação de intervenções, os resultados positivos dependem da
              motivação constante. É a conexão entre as pessoas que faz os
              projetos avançarem, que provoca mudanças desejáveis. A área social
              tem na sua intervenção objetos de necessidades múltiplas, onde as
              funçõesdos profissionais interventivos se interligam e se
              influenciam. O nosso trabalho ia para lá da intervenção
              psicológica, mas também se centrava na consultadoria e promoção de
              um ambiente coeso entre a equipa. Ações uniformes aumentavam
              exponencialmente o sucesso do nosso público-alvo.{" "}
            </p>
          </div>
          <div>
            <p>
              Quando começamos a criar dinâmicas de relação e compreensão, foi
              visível o impacto que isso teve na estabilidade dos recursos
              humanos, diminuição da rotatividade, na diminuição de conflitos e
              no surgimento de novos projetos, porque a equipa deixou de
              &quot;apagar fogos&quot; e sentiu-se mais competente para crescer.
            </p>
          </div>
          <div>
            <p>
              Estamos todos interligados quando trabalhamos na mesma equipa.
            </p>
          </div>
        </div>
        <div>
          <img src={Eclipse} alt="eclipse" className="who-eclipse" />
        </div>
      </div>

      <div className="who-fifth-container">
        <div>
          <h1>Os Nossos Valores</h1>
        </div>
        <div>
          <div className="list-item-container">
            <div>
              <img src={ListItem} alt="List-item" className="List-item" />
            </div>
            <div className="list-item-h2-p">
              <h2>Liberdade Psicológica</h2>
              <p>
                Independência psicológica, empoderando para a autogestão,
                resolução de conflitos e vivência autónoma, promovendo e
                mantendo o seu bem-estar.
              </p>
            </div>
          </div>

          <div className="list-item-container">
            <div>
              <img
                src={ListItem}
                alt="List-item"
                className="List-item List-item-2"
              />
            </div>
            <div className="list-item-h2-p">
              <h2>AUTOCONHECIMENTO</h2>
              <p>Promoção de autoconhecimento, provocando insight.</p>
            </div>
          </div>

          <div className="list-item-container">
            <div>
              <img
                src={ListItem}
                alt="List-item"
                className="List-item List-item-3"
              />
            </div>
            <div className="list-item-h2-p">
              <h2>HUMANIZAÇÃO</h2>
              <p>
                Humanizar as relações e interações melhora o bem-estar intra e
                interpessoal.
              </p>
            </div>
          </div>

          <div className="list-item-container">
            <div>
              <img
                src={ListItem}
                alt="List-item"
                className="List-item List-item-4"
              />
            </div>
            <div className="list-item-h2-p">
              <h2>AUTOPRESERVAÇÃO</h2>
              <p>
                Autopreservação, valorizando a individualidade e ajudando a
                estabelecer limites e barreiras pessoais protetoras.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="who-sixth-container">
        <div>
          <h1>PRINCÍPIOS ORIENTADORES</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default WhoWeArePage;
