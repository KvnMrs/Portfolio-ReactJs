import React from "react";
import "./Style.css";
import dataCv from "../../datas/DatasExperiences";

const ExperiencesRestauration = () => {
  return (
    <>
      <div className="w-11/12 bg-dark_blue scrollbar-hide gradiant-dark rounded-2xl overflow-scroll divide-y divide-white h-5/6 mx-auto my-6 px-5  shadow-2xl ">
        {dataCv.map((exp) => (
          <>
            <div className=" w-3/4 text-center py-8 px-20 m-auto ">
              <h1 className="text-3xl text-white">{exp.entreprise}</h1>
              <h2 className="text-2xl text-gray-400">{exp.lieu}</h2>
              <h2 className="text-2xl text-gray-400">{exp.date}</h2>
              <h3 className="text-xl text-gray-400">{exp.statut}</h3>
              <p className="text-xl text-gray-400 italic">{exp.mission}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ExperiencesRestauration;
