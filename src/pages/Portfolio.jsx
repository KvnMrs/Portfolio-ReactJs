import React from "react";
import Portfolio from "../components/uniques/Portfolio";
import Button from "../components/communs/Button";

const Portefolio = () => {
  return (
    <>
      <div className="w-full text-center mx-auto py-5 list-none h-screen place-content-center  ">
        <Button>Projets Wild Code School</Button>
        <Portfolio />
      </div>
    </>
  );
};

export default Portefolio;
