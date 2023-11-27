/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SolutionsCards.css";
import formacaoIcon from "../../../../Assets/HomePage/SolutionsAssets/FormaçãoIcon.png";
import consultadoriaIcon from "../../../../Assets/HomePage/SolutionsAssets/ConsultadoriaIcon.png";
import Arrow from "../../../../Assets/HomePage/SolutionsAssets/SolutionsArrow.png";

const cardsData = [
  {
    id: 1,
    icon: consultadoriaIcon,
    title: "Consultoria",
    subtitle: "Plano de ação",
    text: "Avaliação empática do contexto laboral.",
    href: "/consultoria",
  },
  {
    id: 2,
    icon: formacaoIcon,
    title: "Formação",
    subtitle: "12 horas de formação presencial e 6h treino especializado",
    text: "Metodologia combinada com dinâmicas de imersão, sociodrama, design thinking e storytelling.",
    href: "/formacao",
  },
];

const Card = ({ data }) => (
  <div className="card-container">
    <div>
      <img className="icon" src={data.icon} alt="icon" />
    </div>
    <div>
      <h3>{data.title}</h3>
      <h5>{data.subtitle}</h5>
    </div>
    <div>
      <p>{data.text}</p>
    </div>
    <a href={data.href}>
      <img src={Arrow} alt="arrow" />
    </a>
  </div>
);

const SolutionsCards = () => (
  <div className="cards-container">
    {cardsData.map((card) => (
      <Card key={card.id} data={card} />
    ))}
  </div>
);

export default SolutionsCards;
