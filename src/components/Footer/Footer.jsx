import React from "react";
import "./Footer.css";
import FooterArrow from "../../Assets/FooterAssets/FooterArrow.png";
import FooterLogo from "../../Assets/LogoAssets/FooterLogo.png";
import insta from "../../Assets/FooterAssets/Instagram.png";
import linkedin from "../../Assets/FooterAssets/LinkedIn.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+351 913 143 178";

  const instaHanldeClick = () => {
    window.open("https://www.instagram.com/translucido.pt/", "_blank");
  };

  const linkedInHanldeClick = () => {
    window.open(
      "https://www.linkedin.com/company/transl%C3%BAcido-pt/",
      "_blank"
    );
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNunoClick = () => {
    window.open(
      "https://www.linkedin.com/in/nuno-cola%C3%A7o-836163174/",
      "_blank"
    );
  };

  return (
    <>
      <div className="footer-main-container">
        <div>
          <img src={FooterArrow} alt="footer-arrow" className="footer-arrow" />
        </div>
        <div className="footer-logo-container">
          <Link
            to="/"
            onClick={handleLinkClick}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img className="footer-logo" src={FooterLogo} alt="footer-logo" />
          </Link>
          <p className="footer-address">Lisboa, Portugal</p>
          <div className="footer-mail-number-section">
            <div>
              <p>
                <a
                  className="contacts"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "12px",
                  }}
                  href={`tel:${phoneNumber}`}
                >
                  t. {phoneNumber}
                </a>
              </p>
            </div>
            <div>
              <a
                className="contacts"
                href="mailto:translucido.empatia@gmail.com?subject=Feedback%20sobre%20a%20Translúcido!&body=Olá!%20Gostamos%20muito%20dos%20nossos%20clientes,%20por%20isso%20temos%20todo%20o%20gosto%20em%20receber%20sugestões%20e%20feedback.%20Obrigado!"
                style={{ textDecoration: "none", fontSize: "12px" }}
              >
                <p style={{ fontSize: "12px" }}>
                  e. translucido.empatia@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-pages-section">
          <div className="footer-pages">
            <div>
              <Link
                to="/"
                onClick={handleLinkClick}
                style={{ textDecoration: "none" }}
              >
                <h5>Início</h5>
              </Link>
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
              <Link
                to="/metodologias"
                onClick={handleLinkClick}
                style={{ textDecoration: "none" }}
              >
                <h5>Metodologias</h5>
              </Link>
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
              <Link
                to="/solucoes"
                onClick={handleLinkClick}
                style={{ textDecoration: "none" }}
              >
                <h5>Soluções</h5>
              </Link>
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
            <img
              onClick={instaHanldeClick}
              className="footer-icon"
              src={insta}
              alt="instagram"
            />
          </div>
          <div>
            <img
              onClick={linkedInHanldeClick}
              className="footer-icon"
              src={linkedin}
              alt="linkedin"
            />
          </div>
        </div>
        <div className="linkedInNuno" onClick={handleNunoClick}>
          <h5>&nbsp;Website By: Nuno Colaço</h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
