/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MethodologiesPage.css";
import circle from "../../Assets/MethodologiesPage/LandingAssets/Intersect.png";
import landingImage from "../../Assets/MethodologiesPage/LandingAssets/LandingImage.png";
import imersao from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Imersão.png";
import sociodrama from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Sociodrama.png";
import storytelling from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/StoryTelling.png";
import designthinking from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/DesignThinking.png";

// const solutionsData = [
//   {
//     id: 1,
//     image: imersao,
//     title: "Consultoria",
//     subtitle: "Plano de ação",
//     text: "Avaliação empática do contexto laboral.",
//   },
//   {
//     id: 2,
//     icon: sociodrama,
//     title: "Formação",
//     subtitle: "12 horas de formação presencial e 6h treino especializado",
//     text: "Metodologia combinada com dinâmicas de imersão, sociodrama, design thinking e storytelling.",
//   },
//   {
//     id: 3,
//     icon: storytelling,
//     title: "Formação",
//     subtitle: "12 horas de formação presencial e 6h treino especializado",
//     text: "Metodologia combinada com dinâmicas de imersão, sociodrama, design thinking e storytelling.",
//   },
//   {
//     id: 4,
//     icon: designthinking,
//     title: "Formação",
//     subtitle: "12 horas de formação presencial e 6h treino especializado",
//     text: "Metodologia combinada com dinâmicas de imersão, sociodrama, design thinking e storytelling.",
//   },
// ];

const MethodologiesPage = () => {
  return (
    <div>
      <div className="landing-images">
        <div>
          <img src={circle} alt="first-image" className="circle-image" />
        </div>
        <div>
          <img
            src={landingImage}
            alt="second-image"
            className="landing-image"
          />
        </div>
      </div>

      <div className="methodologies-main-container">
        <div>
          <h1>Metodologias</h1>
        </div>
        <div className="p-section">
          <div>
            <p>
              A partir de uma metodologia combinada com dinâmicas de imersão,
              sociodrama, design thinking, storytelling, permitimos aos
              formandos desenvolver a competência empática.
            </p>
          </div>
          <div>
            <p>
              Com 12 horas de formação presencial e 6 horas de plano de treino
              especializado, promovemos o insight e capacitamos os formandos
              para serem agentes ativos, quer por serem capazes de comunicarem
              empaticamente e diminuir os conflitos interpessoais, quer pelo
              desenvolvimento de projeto empático.
            </p>
          </div>
          <div>
            <p>
              O treino enquanto via para o desenvolvimento da competência
              empática, exige consistência e continuidade para que possa se
              desenvolver.
            </p>
          </div>
          <div>
            <p>
              É ainda produzido um relatório de avaliação empática, dando
              feedback ao cliente.
            </p>
          </div>
        </div>
      </div>
      <div className="methodologies-type-section">
        <div className="imersao-methodology">
          <div>
            <img src={imersao} alt="imersao" />
          </div>
          <div className="imersao-methodology-text">
            <div>
              <h2>Imersão</h2>
            </div>
            <div>
              <p>
                Com recurso a ambientes inéditos e ilusórios irá sentir-se parte
                do que está a ser apresentado e usar os seus sentidos para
                explorá-lo. Tem como principal objetivo aprofundar debates e
                reflexões, para despertar um comportamento mais empático e
                apresentar-lhe o processo neuropsicológico pelo qual a empatia
                acontece.
              </p>
            </div>
          </div>
        </div>

        <div className="sociodrama-methodology">
          <div>
            <img src={sociodrama} alt="imersao" className="exception-image" />
          </div>
          <div className="sociodrama-methodology-text">
            <div>
              <h2>Sociodrama</h2>
            </div>
            <div>
              <div>
                <p>
                  Esta estratégia de intervenção pedagógica, dirigida à
                  transformação de comportamentos nos grupos, parte da avaliação
                  dos desafios sentidos no passado e presente profissional.
                </p>
              </div>
              <div>
                <p>
                  Passa pela dramatização das experiências, permitindo ao grupo
                  ganhar consciência de si mesmo e de formas empáticas de gestão
                  do conflito. Potencia, ainda, o entendimento dos formandos
                  sobre o ponto de vista de outras pessoas, privilegiando o
                  treino da espontaneidade, como resposta adequada a novas
                  situações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologiesPage;
