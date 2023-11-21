import React from "react";
import "../../App.css";
import "./HomePage.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import Image1 from "../../Assets/HomePage/LandingAssets/LandingPageImages/Soft skill passível de ser desenvolvida.png";
import Image2 from "../../Assets/HomePage/LandingAssets/LandingPageImages/diferente de simpatia.png";
import Image3 from "../../Assets/HomePage/LandingAssets/LandingPageImages/perguntar se esta tudo bem e t er tempo para ouvir um não.png";
import Image4 from "../../Assets/HomePage/LandingAssets/LandingPageImages/permitir trabalho híbrido.jpg";

const HomePage = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div>
      <div className="image-slider-container">
        <ImageSlider images={images} />
      </div>
      <div>
        <h1>Empatia é</h1>
      </div>
    </div>
  );
};

export default HomePage;
