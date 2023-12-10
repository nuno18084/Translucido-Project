/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SolutionsCards.css";
import formacaoIcon from "../../../../Assets/HomePage/SolutionsAssets/FormaçãoIcon.png";
import consultadoriaIcon from "../../../../Assets/HomePage/SolutionsAssets/ConsultadoriaIcon.png";
import Arrow from "../../../../Assets/HomePage/SolutionsAssets/SolutionsArrow.png";
import { Link } from "react-router-dom";

const handleLinkClick1 = () => {
  window.scrollTo({
    top: 1100,
    behavior: "smooth",
  });
};

const handleLinkClick2 = () => {
  window.scrollTo({
    top: 2250,
    behavior: "smooth",
  });
};

const cardsData = [
  {
    id: 1,
    icon: consultadoriaIcon,
    title: "Consultoria",
    subtitle: "Plano de ação",
    text: "Avaliação empática do contexto laboral.",
    to: "/solucoes",
    onClick: handleLinkClick1,
  },
  {
    id: 2,
    icon: formacaoIcon,
    title: "Formação",
    subtitle: "12 horas de formação presencial e 6h treino especializado",
    text: "Metodologia combinada com dinâmicas de imersão, sociodrama, design thinking e storytelling.",
    to: "/solucoes",
    onClick: handleLinkClick2,
  },
];

const Card = ({ data, isWide }) => (
  <div className={`card-container ${isWide ? "wide-card" : ""}`}>
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
    <Link to={data.to} onClick={data.onClick}>
      <img src={Arrow} alt="arrow" />
    </Link>
  </div>
);

const SolutionsCards = () => (
  <div className="cards-container">
    {cardsData.map((card, id) => (
      <Card key={card.id} data={card} isWide={id === 1} />
    ))}
  </div>
);

export default SolutionsCards;
