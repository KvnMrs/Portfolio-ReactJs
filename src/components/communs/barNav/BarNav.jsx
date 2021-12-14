import React from "react";
import { Link } from "react-router-dom";
import img_profil from "../../../assets/imgBarNav/img_profil.png";

const BarNav = () => {
  return (
    <>
      <div className="bg-dark_blue text-white grid flex-shrink-0 grid-col w-80 h-screen text-center px-6  ">
        {/* PRENOM NOM */}
        <div className="mt-3">
          <img
            src={img_profil}
            alt="profil"
            className="rounded-full w-44 mx-auto my-5"
          />
          <h1 className="text-4xl font-bold mt-6">Marais Kévin</h1>
          <h2 className="text-xl font-semibold m-1">Developpeur Web Junior</h2>
          {/* IMG PROFIL */}
        </div>
        <span className="border-solid border-b-2 border-white w-36 m-auto" />
        {/* NAVIGATION */}
        <div className="grid flex-shrink-0 grid-col text-2xl h-80 mt-20">
          <Link to="/">
            <button
              type="button"
              className="
               transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      "
            >
              Accueil
            </button>
          </Link>
          <Link to="/a-propos">
            <button
              type="button"
              className=" transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      "
            >
              À propos de moi
            </button>
          </Link>
          <Link to="/cv">
            <button
              type="button"
              className=" transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      "
            >
              Mon CV
            </button>
          </Link>
          <Link to="/portefolio">
            <button
              type="button"
              className=" transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      "
            >
              Mon portfolio
            </button>
          </Link>

          <Link to="/contact">
            <button
              type="button"
              className=" transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      "
            >
              Me contacter
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BarNav;
