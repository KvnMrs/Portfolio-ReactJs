import React from "react";
import "./Cv.css";
import dataFormations from "../../datas/DatasFormations";

const Fomations = () => {
  return (
    <>
      <div className="w-11/12 bg-dark_blue scrollbar-hide gradiant rounded-2xl overflow-scroll divide-y divide-white h-5/6 mx-auto my-6 px-5 py-16 hover:shadow-2xl ">
        {dataFormations.map((exp) => (
          <>
            <div className=" w-3/4 text-center py-8 px-20 m-auto ">
              <h1 className="text-3xl text-white">{exp.centre}</h1>
              <h2 className="text-2xl text-gray-400">{exp.lieu}</h2>
              <h2 className="text-2xl text-gray-400">{exp.date}</h2>
              <h3 className="text-xl text-gray-400 italic">{exp.statut}</h3>
              {/* <span className="border-solid border-b-2 border-white w-36 m-auto" /> */}
            </div>
          </>
        ))}
      </div>
      ;
    </>
  );
};

export default Fomations;
