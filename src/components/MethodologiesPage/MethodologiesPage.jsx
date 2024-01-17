/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./MethodologiesPage.css";
import circle from "../../Assets/MethodologiesPage/LandingAssets/Intersect.png";
import landingImage from "../../Assets/MethodologiesPage/LandingAssets/LandingImage.png";
import imersao from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Imersão.png";
import sociodrama from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/Sociodrama.png";
import storytelling from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/StoryTelling.png";
import designthinking from "../../Assets/HomePage/MethodologiesAssets/MethodologiesCartoons/DesignThinking.png";

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
              Translúcido é o que deixa passar a luz, alguém que é erudito,
              repleto de conhecimento e cultura.
            </p>
          </div>
          <div>
            <p>
              Colocarmo-nos no lugar do outro exige que possamos estar
              disponíveis para conhecer, para nos deixarmos atravessar pela
              experiência de uma outra pessoa. Usamos a combinação de 4 das
              melhores estratégias que permitem{" "}
              <strong>treinar e promover</strong> o desenvolvimento desta
              competência:{" "}
              <strong>
                imersão, sociodrama, storytelling e design thinking
              </strong>
              . Começamos por conhecer o que é <strong>empatia</strong>,
              passamos a experienciá-la, avançamos para a sua compreensão e
              finalizamos com a ação.
            </p>
          </div>
          <div>
            <p>
              Na metodologia que propomos tornas-te Translúcido: a pessoa que é
              leve, erudita e, acima de tudo, empática.
            </p>
          </div>
        </div>
      </div>
      <div className="methodologies-type-section">
        <div className="imersao-methodology">
          <div>
            <img
              src={imersao}
              alt="imersao"
              className="imersao-methodology-section"
            />
          </div>
          <div className="imersao-methodology-text">
            <div>
              <h2 className="imersao-methodology-text-h2">Imersão</h2>
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
            <img
              src={sociodrama}
              alt="sociodrama"
              className="exception-image"
            />
          </div>
          <div className="sociodrama-methodology-text">
            <div>
              <h2>Sociodrama</h2>
            </div>
            <div className="sociodrama-methodology-text-exception">
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

        <div className="story-methodology">
          <div>
            <img src={storytelling} alt="story" className="exception-image" />
          </div>
          <div className="sociodrama-methodology-text story-methodology-text">
            <div>
              <h2>Story telling</h2>
            </div>
            <div>
              <div>
                <p>
                  Conhecer o outro e a sua história é a via mais poderosa, mas
                  também necessária, para a criação de empatia. As estratégias
                  de storytelling promovem a conexão entre orador e ouvinte.
                  Contar histórias ativa o nosso sistema límbico, responsável
                  pelas emoções e pela aprendizagem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="design-methodology">
          <div>
            <img
              src={designthinking}
              alt="design"
              className="exception-image"
            />
          </div>
          <div className="sociodrama-methodology-text">
            <div>
              <h2>Design thinking</h2>
            </div>
            <div>
              <div>
                <p>
                  Enquanto abordagem de pensamento criativo, estimula a procura
                  de conhecimento e cria as condições necessárias para promover
                  insights. Realizado de forma coletiva e colaborativa, reúne o
                  máximo de perspetivas diferentes, essenciais para a capacidade
                  empática, permite a tomada de perspetiva e uma compreensão das
                  necessidades funcionais, psicológicas e emocionais do outro.
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
