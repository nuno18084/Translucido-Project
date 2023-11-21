/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
import NavbarCross from "../../Assets/NavbarAssets/NavbarCross.png";
import BurgerMenu from "../../Assets/NavbarAssets/HamburguerMenu.png";
import Logo from "../../Assets/LogoAssets/MainLogo.png";
import "./Navbar.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // const history = useHistory();

  // const closeMenu = (path) => {
  //   history.push(path);
  // };

  return (
    <div className="navbar-menu-logo-container">
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <Menu
        right
        customBurgerIcon={<img src={BurgerMenu} alt="burger-menu" />}
        customCrossIcon={<img src={NavbarCross} alt="cross" />}
      >
        <a href="/" id="home" className="menu-item">
          Início
        </a>
        <a href="/metodologias" id="about" className="menu-item">
          Metodologias
        </a>
        <a href="/quem-somos" id="about" className="menu-item">
          Quem somos
        </a>
        <a href="/solucoes" id="contact" className="menu-item">
          Soluções
        </a>
        <a href="/agendar" id="settings" className="menu-item">
          Agendar
        </a>
      </Menu>
    </div>
  );
};
