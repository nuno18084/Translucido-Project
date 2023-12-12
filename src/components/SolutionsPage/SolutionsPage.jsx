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

  const handleButtonClick = () => {
    // Scroll to the target element
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <div>
            <button className="solutions-btn" onClick={handleButtonClick}>
              Ver Soluções
            </button>
          </div>
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
                Atuamos na <strong>gestão e desenvolvimento de projetos</strong>
                , adicionando empatia à sua solução. Utilizamos uma metodologia
                combinada das melhores estratégias de impacto.
              </p>
            </div>
            <div>
              <p>
                Potenciamos o seu negócio! Num processo de{" "}
                <strong>co-construção</strong> com o cliente, definimos um{" "}
                <strong>plano de ação</strong>, com medidas e estratégias
                transversais a toda a organização. Fazendo uso dos riscos
                psicossociais, do índice de reatividade interpessoal e dos
                critérios de uma organização saudável, avaliamos potencialidades
                e fragilidades. Uma intervenção quer ao nível da equipa, como da
                sua cultura, no propósito de tornar o{" "}
                <strong>local de trabalho mais empático</strong> para todos os
                envolvidos.
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
                <strong>12 horas de formação</strong> presencial ou à distância
                e <strong>6 horas de plano de treino especializado</strong>,
                para promover o insight e capacitar os formandos como agentes
                ativos.
              </p>
            </div>
            <div>
              <p>
                Destinada a <strong>toda e qualquer pessoa</strong>, esta
                formação capacita para o{" "}
                <strong>uso da capacidade empática</strong>. No final será capaz
                de reconhecer o processo neuropsicológico da empatia, conhecer
                estratégias de comunicação empática e de desenvolver e gerir um
                projeto empático.
              </p>
            </div>
            <div>
              <p>
                O treino, enquanto vi para o desenvolvimento da competência
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
