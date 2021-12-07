import React from "react";
import dataCv from "../../data/DataExperiences";

const ExperiencesRestauration = () => {
  return (
    <div className="w-full overflow-scroll m-2 p-2 h-screen  my-auto mx-5 block ">
      {dataCv
        .filter((categorie) => categorie.categorie === "restauration")
        .map((exp) => (
          <>
            <div className=" text-center my-8">
              <img src={exp.img} alt="entreprise" className="w-36 m-auto" />
              <h1 className="text-3xl text-white">{exp.entreprise}</h1>
              <h2 className="text-2xl text-gray-400">{exp.lieu}</h2>
              <h2 className="text-2xl text-gray-400">{exp.date}</h2>
              <h3 className="text-xl text-gray-400">{exp.statut}</h3>
              <p className="text-xl text-gray-400">{exp.mission}</p>
              <span className="border-solid border-b-5 border-white w-full m-auto" />
            </div>
          </>
        ))}
    </div>
  );
};

export default ExperiencesRestauration;
