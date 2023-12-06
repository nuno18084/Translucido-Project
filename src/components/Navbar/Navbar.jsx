/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import NavbarCross from "../../Assets/NavbarAssets/NavbarCross.png";
import BurgerMenu from "../../Assets/NavbarAssets/HamburguerMenu.png";
import Logo from "../../Assets/LogoAssets/MainLogo.png";
import "./Navbar.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className={`navbar-menu-logo-container ${isSticky ? "sticky" : ""}`}>
      <div>
        <Link to="/" onClick={handleLinkClick}>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={<img src={BurgerMenu} alt="burger-menu" />}
        customCrossIcon={<img src={NavbarCross} alt="cross" />}
      >
        <Link
          to="/"
          className={`menu-item ${isLinkActive("/") ? "active-link" : ""}`}
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          Início
        </Link>
        <Link
          to="/metodologias"
          className={`menu-item ${
            isLinkActive("/metodologias") ? "active-link" : ""
          }`}
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          Metodologias
        </Link>
        <Link
          to="/quem-somos"
          className={`menu-item ${
            isLinkActive("/quem-somos") ? "active-link" : ""
          }`}
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          Quem somos
        </Link>
        <Link
          to="/solucoes"
          className={`menu-item ${
            isLinkActive("/solucoes") ? "active-link" : ""
          }`}
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          Soluções
        </Link>
        <Link
          to="/agendar"
          className={`menu-item ${
            isLinkActive("/agendar") ? "active-link" : ""
          }`}
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          Agendar
        </Link>
      </Menu>
    </div>
  );
};
