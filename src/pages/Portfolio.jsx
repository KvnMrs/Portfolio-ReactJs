import React from "react";
import Portfolio from "../components/uniques/Portfolio";
import Button from "../components/communs/Button";
import { Link } from "react-router-dom";

const Portefolio = () => {
  return (
    <>
      <div className="w-full text-center mx-auto py-5 list-none md:h-screen place-content-center h-full  ">
        <Button>Projets Wild Code School</Button>
        <Portfolio />
        <Link to="/contact">
          <Button className="my-2 md:hidden">Continuer</Button>
        </Link>
      </div>
    </>
  );
};

export default Portefolio;
