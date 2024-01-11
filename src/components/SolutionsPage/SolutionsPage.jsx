/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef } from "react";
import "./SolutionsPage.css";
import eclipse from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsEclipse.png";
import eclipse2 from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsEclipse.png";
import SolutionsCartoon from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsCartoon.png";
import consultoriaImage from "../../Assets/SolutionsPage/SolutionsAssets/ConsultoriaImage.png";
import FormacaoImage from "../../Assets/SolutionsPage/SolutionsAssets/FormacaoImage.png";

const SolutionsPage = () => {
  const targetElementRef = useRef(null);

  // const handleButtonClick = () => {
  //   // Scroll to the target element
  //   if (targetElementRef.current) {
  //     targetElementRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="page-main-container">
      <div className="solutions-main-container-2">
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
          {/* <div>
            <button className="solutions-btn" onClick={handleButtonClick}>
              Ver Soluções
            </button>
          </div> */}
        </div>
        <div>
          <img src={eclipse2} alt="eclipse" className="solutions-eclipse-2" />
        </div>
      </div>
      <div className="solutions-second-container">
        <div>
          <p>
            Transforme o seu ambiente e as relações, com a{" "}
            <strong>empatia como catalisador</strong> de mudanças positivas.
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
      <div
        className="solutions-third-container"
        ref={targetElementRef}
        id="targetElement"
      >
        <div>
          <img
            src={consultoriaImage}
            alt="consultoria-image"
            className="solutions-images"
          />
        </div>
        <div className="solutions-third-container-left">
          <div>
            <h1>Consultoria</h1>
          </div>
          <div>
            <div>
              <p>Torne o seu projeto empático!</p>
            </div>
            <div>
              <p>
                Atuamos na gestão e desenvolvimento de projetos, adicionando
                empatia à sua solução. Utilizamos uma metodologia combinada das
                melhores estratégias de impacto.
              </p>
            </div>
            <div>
              <p>
                Potenciamos o seu negócio! Num processo de co-construção com o
                cliente, definimos um plano de ação, com medidas e estratégias
                de promoção de empatia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="solutions-forth-container">
        <div>
          <img
            src={FormacaoImage}
            alt="consultoria-image"
            className="solutions-images"
          />
        </div>
        <div className="solutions-forth-container-left">
          <div>
            <h1>Formação</h1>
          </div>
          <div>
            <div>
              <p>
                12 horas de formação presencial ou à distância e 6 horas de
                plano de treino especializado, para:
              </p>
            </div>
            <div>
              <p>
                Promover o insight <br /> Capacitar os formandos como agentes
                ativos.
              </p>
            </div>
            <div>
              <p>
                Destinada a toda e qualquer pessoa, esta formação capacita para
                o uso da capacidade empática. No final será capaz de:
              </p>
            </div>
            <div>
              <p>
                Reconhecer o processo neuropsicológico da empatia <br />{" "}
                Conhecer estratégias de comunicação empática <br /> Desenvolver
                e gerir um projeto empático.
              </p>
            </div>
            <div>
              <p>
                O treino, enquanto via para o desenvolvimento da competência
                empática, é realizado como parte integrante da aprendizagem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
