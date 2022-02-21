import React, { useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import { Link } from "react-router-dom";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden h-14 gradiant-dark fixed w-full ">
        <Menu isOpen={isOpen} onOpen={() => openMenu()}>
          <Link
            to="/"
            id="home"
            className="menu-item"
            onClick={() => closeMenu()}
          >
            Accueil
          </Link>
          <Link
            to="/a-propos"
            id="about"
            className="menu-item"
            onClick={() => closeMenu()}
          >
            À propos de moi
          </Link>
          <Link
            to="/cv"
            id="cv"
            className="menu-item"
            onClick={() => closeMenu()}
          >
            Mon CV
          </Link>
          <Link
            to="/contact"
            id="contact"
            className="menu-item"
            onClick={() => closeMenu()}
          >
            Me contacter
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default BurgerButton;
