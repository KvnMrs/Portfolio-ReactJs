import React from "react";
import "./Cv.css";
import dataFormations from "../../datas/DatasFormations";

const Fomations = () => {
  return (
    <>
      <div className="w-4/6 gradiant rounded-2xl overflow-scroll no-bar mt-6 h-5/6 p-2 m-auto px-5 hover:shadow-xl ">
        {dataFormations.map((exp) => (
          <>
            <div className=" text-center shadow-sm py-8 m-2">
              <h1 className="text-3xl text-white">{exp.centre}</h1>
              <h2 className="text-2xl text-gray-400">{exp.lieu}</h2>
              <h2 className="text-2xl text-gray-400">{exp.date}</h2>
              <h3 className="text-xl text-gray-400 italic">{exp.statut}</h3>
              <span className="border-solid border-b-2 border-white w-36 m-auto" />
            </div>
          </>
        ))}
      </div>
      ;
    </>
  );
};

export default Fomations;
