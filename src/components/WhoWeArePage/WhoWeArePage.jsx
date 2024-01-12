import React from "react";
import "./WhoWeArePage.css";
import Ana from "../../Assets/WhoWeAreAssets/AnaSofiaPic.png";
import Rita from "../../Assets/WhoWeAreAssets/RitaFerreiraPic.png";
import LinkedIn from "../../Assets/FooterAssets/LinkedIn.png";
import { Link } from "react-router-dom";
import TranslucidoPic from "../../Assets/WhoWeAreAssets/WhoWeAreCartoon.png";
import ArrowMax from "../../Assets/WhoWeAreAssets/WhoWeAreArrow.png";
import doubleQuotes from "../../Assets/WhoWeAreAssets/DoubleQuotes.png";
import Eclipse from "../../Assets/WhoWeAreAssets/WhoEllipse.png";
import ListItem from "../../Assets/WhoWeAreAssets/ListItem.png";
import WordSlider from "./WordSlider/WordSlider";
import Marquee from "react-fast-marquee";
import TextTyped from "../HomePage/Typed/TextTransition";
import EmpathySection from "../HomePage/EmpathySection/EmpathySection";

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
              consultoria. Visamos capacitar a pessoa nas suas relações
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
        <div className="who-p-image-section">
          <div className="translucido-p-section">
            <div>
              <p>
                Somos uma <strong>equipa de profissionais de psicologia</strong>
                , orientados para o desenvolvimento da empatia. A Translúcido
                dedica-se exclusivamente à <strong>capacidade empática</strong>,
                à sua explicação científica e às suas potencialidades,
                promovendo relações empáticas, em diferentes ambientes, por meio
                de treino e consultadoria.{" "}
              </p>
            </div>
            <div className="arrow-max-section">
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
      </div>

      <div className="who-third-container">
        <div>
          <img
            src={doubleQuotes}
            alt="double-quotes"
            className="double-quotes double-quotes-first"
          />
        </div>
        <div>
          <h2 className="who-third-container-h2">
            Profissionalmente, crescidas na área social. Pessoalmente, em
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
              projetos avançarem, que provoca mudanças desejáveis. A criação de
              dinâmicas de relação e compreensão traz impacto na estabilidade
              dos recursos humanos, diminuição da rotatividade, na diminuição de
              conflitos e no surgimento de novos projetos, porque a equipa deixa
              de &quot;apagar fogos&quot; e sente-se mais competente para
              crescer.{" "}
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
        <div className="list-item-main-container">
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
              <h2>Autoconhecimento</h2>
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
              <h2>Humanização</h2>
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
              <h2>Autopreservação</h2>
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
        <Marquee>
          <div>
            <WordSlider />
          </div>
        </Marquee>
      </div>

      <div className="who-seventh-container">
        <div>
          <h2>A nossa missão é</h2>
        </div>
        <div>
          <h1>
            Humanizar as relações formais e potenciar as relações informais.
          </h1>
        </div>
      </div>
      <div className="who-eighth-container">
        <div>
          <h1 className="who-eighth-container-h1">Empatia</h1>
        </div>
        <div>
          <h2 className="who-eighth-container-h2">
            Empatia é um solvente universal
          </h2>
        </div>
        <div>
          <p className="who-eighth-container-p">
            Definimos empatia enquanto construto multidimensional
          </p>
        </div>
        <div>
          <EmpathySection />
        </div>
        <div>
          <h3 className="empathy-map-container-h3">
            A forma como a pessoa percebe e pensa o outro é mediada pela relação
            e contexto social.
          </h3>
        </div>
      </div>
      <div className="who-ninth-container">
        <div>
          <div>
            <h2 className="empathy-map-container-h2">
              Pessoas empáticas são pessoas mais!
            </h2>
          </div>
        </div>
        <div className="empathy-map-last-container">
          <div>
            <h1>Mais</h1>
          </div>
          <div>
            <div>
              <TextTyped />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeArePage;
