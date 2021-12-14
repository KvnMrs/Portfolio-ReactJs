import React from "react";
import "./Cv.css";
import dataCv from "../../data/DataExperiences";

const ExperiencesRestauration = () => {
  return (
    <>
      <div className="w-4/6 bg-dark_blue gradiant rounded-2xl overflow-scroll no-bar mt-6 h-5/6 p-2 mx-auto px-5 hover:shadow-xl ">
        {dataCv.map((exp) => (
          <>
            <div className=" text-center  py-8 m-2">
              <h1 className="text-3xl text-white">{exp.entreprise}</h1>
              <h2 className="text-2xl text-gray-400">{exp.lieu}</h2>
              <h2 className="text-2xl text-gray-400">{exp.date}</h2>
              <h3 className="text-xl text-gray-400">{exp.statut}</h3>
              <p className="text-xl text-gray-400 italic">{exp.mission}</p>
              {/* <span className="border-solid border-b-5 border-white w-full m-auto" /> */}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ExperiencesRestauration;
