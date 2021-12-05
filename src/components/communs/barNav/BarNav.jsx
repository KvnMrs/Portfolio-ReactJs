import React from "react";
import { Link } from "react-router-dom";

const BarNav = () => {
  return (
    <>
      {/* PRENOM NOM */}
      <div>
        <h1>Marais Kévin</h1>
      </div>
      {/* IMG PROFIL */}
      <div>
        <img href="" alt="" />
      </div>
      {/* NAVIGATION */}
      <div>
        <Link to="/">
          <button type="button">Accueil</button>
        </Link>
        <Link to="/a-propos">
          <button type="button">À propos de moi</button>
        </Link>
        <Link to="/cv">
          <button type="button">Mon CV</button>
        </Link>
        <Link to="/portefolio">
          <button type="button">Mon portefolio</button>
        </Link>

        <Link to="/contact">
          <button type="button">Me contacter</button>
        </Link>
      </div>
    </>
  );
};

export default BarNav;
