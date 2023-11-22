import React from "react";
import "../../App.css";
import "./HomePage.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import Image1 from "../../Assets/HomePage/LandingAssets/LandingPageImages/Soft skill passível de ser desenvolvida.png";
import Image2 from "../../Assets/HomePage/LandingAssets/LandingPageImages/diferente de simpatia.png";
import Image3 from "../../Assets/HomePage/LandingAssets/LandingPageImages/perguntar se esta tudo bem e t er tempo para ouvir um não.png";
import Image4 from "../../Assets/HomePage/LandingAssets/LandingPageImages/permitir trabalho híbrido.jpg";
import backgroundRoller from "../../Assets/HomePage/LandingAssets/LandingPageImages/ImagesBackground.png";
import TypedPhrase from "./Typed/Typed";

const HomePage = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="slider-and-phrase">
      <div className="image-slider-container">
        <ImageSlider images={images} className="images-roller" />
        <img
          className="images-background"
          src={backgroundRoller}
          alt="images-background"
        />
      </div>
      <div className="home-page-phrase">
        <div>
          <h1 className="slider-and-phrase-h1">Empatia é</h1>
        </div>
      </div>
      <div className="typed-phrase-h1">
        <TypedPhrase />
      </div>
    </div>
  );
};

export default HomePage;
