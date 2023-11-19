/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import NavbarCross from "../../Assets/NavbarAssets/NavbarCross.png";
import BurgerMenu from "../../Assets/NavbarAssets/HamburguerMenu.png";
import "./Navbar.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Menu
      right
      customBurgerIcon={<img src={BurgerMenu} alt="burger-menu" />}
      customCrossIcon={<img src={NavbarCross} alt="cross" />}
    >
      <a id="home" className="menu-item" href="/">
        Início
      </a>
      <a id="about" className="menu-item" href="/about">
        Metodologias
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Soluções
      </a>
      <a id="settings" className="menu-item--small" href="">
        Agendar
      </a>
    </Menu>
  );
};
