import React, { useState } from "react";
import Experiences from "../components/uniques/Experiences";
import Formations from "../components/uniques/Formations";
import HardSkills from "../components/uniques/HardSkills";
import Button from "../components/communs/Button";

const Cv = () => {
  const [activeExperiences, setActiveExperiences] = useState(true);
  const [activeFormations, setActiveFormations] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);

  const showExperiences = () => {
    setActiveExperiences(true);
    setActiveFormations(false);
    setActiveSkills(false);
  };
  const showFormations = () => {
    setActiveFormations(true);
    setActiveSkills(false);
    setActiveExperiences(false);
  };
  const showSkills = () => {
    setActiveSkills(true);
    setActiveFormations(false);
    setActiveExperiences(false);
  };
  return (
    <>
      {/* <div className="w-full text-center mx-auto mt-5 list-none h-screen place-content-center "> */}
      <div className="w-full text-center mx-auto mt-5 list-none h-screen place-content-center ">
        <div className="mt-2">
          <Button onClick={showExperiences}>Mes experiences</Button>
          <Button onClick={showFormations}>Mes formations</Button>
          <Button onClick={showSkills}>Compétences / Outils</Button>
        </div>
        {activeExperiences ? <Experiences /> : ""}
        {activeFormations ? <Formations /> : ""}
        {activeSkills ? <HardSkills /> : ""}
      </div>
      {/* <Button className="mx-auto">Continuer</Button> */}
    </>
  );
};

export default Cv;
