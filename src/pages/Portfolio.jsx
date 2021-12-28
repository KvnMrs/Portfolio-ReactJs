import React from "react";
import Portfolio from "../components/uniques/Portfolio";

const Portefolio = () => {
  return (
    <>
      <div className="w-full text-center mx-auto py-5 list-none h-screen place-content-center  ">
        <button
          type="button"
          className="text-2xl m-2 text-white border-2 border-gray-200 bg-dark_blue hover:bg-white hover:text-dark_blue py-1 px-7 rounded-2xl  shadow-2xl"
        >
          Projets Wild Code School
        </button>
        <Portfolio />
      </div>
    </>
  );
};

export default Portefolio;
