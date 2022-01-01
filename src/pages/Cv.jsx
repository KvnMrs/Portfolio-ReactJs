import React, { useState } from "react";
import Experiences from "../components/uniques/Experiences";
import Formations from "../components/uniques/Formations";
import HardSkills from "../components/uniques/HardSkills";
import Button from "../components/communs/Button";
import { Link } from "react-router-dom";

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
      <div className="w-full text-center mx-auto mt-5 list-none h-full md:h-screen md:max-h-screen place-content-center scrollbar-hide">
        <div className="mt-2">
          <Button onClick={showExperiences} className="m-2 lg:mx-2 md:mb-0">
            Mes experiences
          </Button>
          <Button onClick={showFormations} className="m-2 lg:mx-2 md:mb-0">
            Mes formations
          </Button>
          <Button onClick={showSkills} className="m-2 mb-0 lg:mx-2 md:mb-0">
            Compétences / Outils
          </Button>
        </div>
        {activeExperiences ? <Experiences /> : ""}
        {activeFormations ? <Formations /> : ""}
        {activeSkills ? <HardSkills /> : ""}
        <Link to="/portfolio">
          <Button className="my-2 md:hidden">Continuer</Button>
        </Link>
      </div>
    </>
  );
};

export default Cv;
