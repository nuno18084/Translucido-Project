import React from "react";
import "../../App.css";
import "./HomePage.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import Image3 from "../../Assets/HomePage/LandingAssets/LandingPageImages/Soft skill passível de ser desenvolvida.png";
import Image2 from "../../Assets/HomePage/LandingAssets/LandingPageImages/diferente de simpatia.png";
import Image4 from "../../Assets/HomePage/LandingAssets/LandingPageImages/perguntar se esta tudo bem e t er tempo para ouvir um não.png";
import Image1 from "../../Assets/HomePage/LandingAssets/LandingPageImages/permitir trabalho híbrido.jpg";
import TypedPhrase from "./Typed/Typed";
import ScrollDown from "../../Assets/HomePage/LandingAssets/ScrollDown/ScrollDownBtn.png";
import Rectangle from "../../Assets/HomePage/LandingAssets/WhoWeAreFigs/RectangleLeft.png";
import Eclipse from "../../Assets/HomePage/LandingAssets/WhoWeAreFigs/EllipseRight.png";
import WhoWeAreSection from "./WhoWeAreSection/WhoWeAreSection";
import MethodologiesSection from "./MethodologiesSection/MethodologiesSection";
import SolutionsSection from "./SolutionsSection/SolutionsSection";

const HomePage = () => {
  const images = [Image1, Image2, Image3, Image4];

  const rearrangedImages = [Image1, ...images.filter((img) => img !== Image1)];

  return (
    <div className="slider-and-phrase">
      <div className="home-page-image-typed">
        <div className="image-slider-container">
          <ImageSlider images={rearrangedImages} className="images-roller" />
        </div>
        <div className="home-page-phrase-typed-main-section">
          <div className="home-page-phrase">
            <div>
              <h1 className="slider-and-phrase-h1">Empatia é</h1>
            </div>
          </div>
          <div className="typed-phrase-h1">
            <TypedPhrase />
          </div>
        </div>
        <div>
          <img src={ScrollDown} alt="scroll-down" className="scroll-down" />
        </div>
      </div>
      <div className="home-who-we-are-section-container">
        <div>
          <img src={Rectangle} alt="rectangle" className="rectangle-toggle" />
        </div>
        <div>
          <WhoWeAreSection />
        </div>
        <div>
          <img src={Eclipse} alt="eclipse" className="eclise-toggle" />
        </div>
      </div>
      <div>
        <MethodologiesSection />
      </div>
      <div>
        <SolutionsSection />
      </div>
    </div>
  );
};

export default HomePage;
