import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center mx-auto mt-20 text-white">
        <div className="mt-20">
          <h1 className="text-4xl">Bienvenue à vous 😁 </h1>
        </div>

        <div>
          <h1 className="text-3xl mt-20">Kévin Marais</h1>
          <h2 className="text-2xl">En formation Developpeur Web full stack</h2>
        </div>
        <div>
          <p className="mt-20 text-white text-1xl"> N'hésitez pas à</p>
          <Link to="/a-propos">
            <button
              type="button"
              className="
               transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      bg-dark_blue
                      hover:bg-white
                      hover:text-dark_blue
                      px-4
                      py-2
                      border-1
                      border-dark_blue
                      mt-3
                      "
            >
              Continuer
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
