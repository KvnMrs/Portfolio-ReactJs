import React, { useState } from "react";
import Experiences from "../components/uniques/Experiences";
import Formations from "../components/uniques/Formations";

const Cv = () => {
  const [activeExperiences, setActiveExperiences] = useState(true);
  const [activeFormations, setActiveFormation] = useState(false);

  const showExperiences = () => {
    setActiveExperiences(!activeExperiences);
    setActiveFormation(!activeFormations);
  };
  const showFormations = () => {
    setActiveFormation(!activeFormations);
    setActiveExperiences(!activeExperiences);
  };
  return (
    <>
      <div className="w-full text-center  mx-auto pt-10 list-none h-screen place-content-center ">
        <div>
          <button
            type="button"
            onClick={showExperiences}
            className="text-2xl m-2 text-white bg-light_blue hover:bg-dark_blue hover:text-white py-1 px-7 rounded-2xl hover:shadow-xl"
          >
            Mes experiences
          </button>
          <button
            type="button"
            onClick={showFormations}
            className="text-2xl m-2 text-white bg-light_blue  hover:bg-dark_blue hover:text-white py-1 px-7 rounded-2xl hover:shadow-xl"
          >
            Mes formations
          </button>
        </div>
        {activeExperiences ? <Experiences /> : ""}
        {activeFormations ? <Formations /> : ""}
      </div>
    </>
  );
};

export default Cv;
