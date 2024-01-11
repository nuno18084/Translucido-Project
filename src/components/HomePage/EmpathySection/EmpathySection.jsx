import React from "react";
import "./EmpathySection.css";
import First from "../../../Assets/WhoWeAreAssets/WhoLogos/WhoLogoFirst.png";
import Second from "../../../Assets/WhoWeAreAssets/WhoLogos/WhoLogoSecond.png";
import Third from "../../../Assets/WhoWeAreAssets/WhoLogos/WhoLogoThird.png";

const EmpathyMap = ({ data }) => {
  return (
    <div className="empathy-map-container">
      {data.map((item, index) => (
        <div className="empathy-map-section" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            sizes={20}
            style={
              index === data.length - 1
                ? { width: "15%", height: "35%" }
                : index === data.length - 2
                ? { width: "25%" }
                : index === data.length - 3
                ? { width: "25%" }
                : null
            }
          />
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const dataArray = [
  {
    id: 1,
    image: First,
    title: "Afetiva",
    subtitle: "Capacidade de partilhar as emoções dos outros.",
  },
  {
    id: 2,
    image: Second,
    title: "Cognitiva",
    subtitle:
      "Capacidade de compreender essas emoções, dando-lhe significado contextual e pessoal.",
  },
  {
    id: 3,
    image: Third,
    title: "Comportamental",
    subtitle: "Capacidade de dar suporte.",
  },
];

const EmpathySection = () => {
  return (
    <div>
      <EmpathyMap data={dataArray} />
    </div>
  );
};

export default EmpathySection;
