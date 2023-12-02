/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./SolutionsPage.css";
import eclipse from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsEclipse.png";
import SolutionsCartoon from "../../Assets/SolutionsPage/SolutionsAssets/SolutionsCartoon.png";
import consultoriaImage from "../../Assets/SolutionsPage/SolutionsAssets/ConsultoriaImage.png";
import FormacaoImage from "../../Assets/SolutionsPage/SolutionsAssets/FormacaoImage.png";

const SolutionsPage = () => {
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
          <img
            src={consultoriaImage}
            alt="consultoria-image"
            className="solutions-images"
          />
        </div>
        <div>
          <h1>Consultoria</h1>
        </div>
        <div>
          <div>
            <p>Torne o seu projeto empático!</p>
          </div>
          <div>
            <p>
              Num processo de co-construção com o cliente, definimos um plano de
              ação, com medidas e estratégias transversais a toda a organização,
              quer ao nível da equipa, como da sua cultura, no propósito de
              tornar o local de trabalho mais empático para todos os envolvidos.
            </p>
          </div>
          <div>
            <p>
              Fazendo uso dos riscos psicossociais, do índice de reatividade
              interpessoal e dos critérios de uma organização saudável,
              avaliamos potencialidades e fragilidades. Depois de ouvir e
              respeitar, é altura de refletir e intervir, proporcionando
              melhoria na relação entre os vários colaboradores e liderança, mas
              também uma melhor compreensão e relação com o cliente e/ ou
              beneficiário. Encontrar os focos de conflito ou de comportamentos
              e atitudes que carecem de empatia, é, habitualmente, o primeiro
              fator de intervenção, mas também algumas medidas ao nível do
              espaço e funcionamento poderão ser úteis.
            </p>
          </div>
          <div>
            <p>
              O objetivo final será, a partir da transformação criada, obter
              impacto emocional e financeiro positivo.
            </p>
          </div>
          <div>
            <p>
              Pessoas empáticas são mais resilientes, cooperantes e produtivas.
            </p>
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
        <div>
          <h1>Formação</h1>
        </div>
        <div>
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
    </div>
  );
};

export default SolutionsPage;
