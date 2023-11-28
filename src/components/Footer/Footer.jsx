import React from "react";
import "./Footer.css";
import FooterArrow from "../../Assets/FooterAssets/FooterArrow.png";
import FooterLogo from "../../Assets/LogoAssets/FooterLogo.png";
import insta from "../../Assets/FooterAssets/Instagram.png";
import linkedin from "../../Assets/FooterAssets/LinkedIn.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div>
          <img src={FooterArrow} alt="footer-arrow" className="footer-arrow" />
        </div>
        <div className="footer-logo-container">
          <img className="footer-logo" src={FooterLogo} alt="footer-logo" />
          <p className="footer-address">Lisboa, Portugal</p>
          <div className="footer-mail-number-section">
            <div>
              <p>t. +351 913 143 178</p>
            </div>
            <div>
              <p>e. translucido.empatia@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-pages-section">
          <div className="footer-pages">
            <div>
              <h5>Início</h5>
            </div>
            <div>
              <p>Quem Somos</p>
            </div>
            <div>
              <p>Metodologias</p>
            </div>
            <div>
              <p>Soluções</p>
            </div>
          </div>

          <div className="footer-pages">
            <div>
              <h5>Metodologias</h5>
            </div>
            <div>
              <p>Imersão</p>
            </div>
            <div>
              <p>Sociodrama</p>
            </div>
            <div>
              <p>Story telling</p>
            </div>
            <div>
              <p>Design thinking</p>
            </div>
          </div>

          <div className="footer-pages">
            <div>
              <h5>Soluções</h5>
            </div>
            <div>
              <p>Consultoria</p>
            </div>
            <div>
              <p>Formação</p>
            </div>
          </div>
        </div>

        <div className="social-media-icons">
          <div>
            <img className="footer-icon" src={insta} alt="instagram" />
          </div>
          <div>
            <img className="footer-icon" src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
