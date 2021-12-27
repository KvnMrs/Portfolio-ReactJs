import React from "react";
import "./Style.css";
import dataPortfolio from "../../datas/DatasPortfolio";

const Portfolio = () => {
  return (
    <>
      <div className="w-11/12 bg-dark_blue scrollbar-hide gradiant-dark rounded-2xl overflow-scroll divide-y divide-white h-5/6 mx-auto my-6 px-5 shadow-2xl ">
        {dataPortfolio.map((el) => (
          <>
            <div className=" w-3/4 text-center py-8 px-20 m-auto mt-5 ">
              <a href={el.lien} blank="" className="">
                <img src={el.image} className="w-96 mx-auto mb-5" />
              </a>
              <h1 className="text-3xl text-white">{el.titre}</h1>
              <h2 className="text-2xl text-gray-400">{el.categorie}</h2>
              <h3 className="text-xl text-gray-400 italic">{el.description}</h3>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
