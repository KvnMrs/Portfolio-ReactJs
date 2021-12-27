import React from "react";
import dataSkills from "../../datas/DatasSkills";

const Skills = () => {
  return (
    <>
      <div className="w-11/12 bg-dark_blue scrollbar-hide gradiant-dark rounded-2xl overflow-scroll h-5/6 mx-auto my-6 px-5 py-10  shadow-2xl ">
        <h1 className="text-3xl text-white mt-8">Compétences</h1>
        <div className="grid grid-cols-3 gap-4 place-content-center my-5 flew-wrap">
          {dataSkills
            .filter((compétence) => compétence.catégorie === "Compétence")
            .map((el) => (
              <div className="grid-cols-1 mx-auto my-5">
                <div className="mx-5  mb-3 text-xl text-white object-center">
                  {el.element}
                </div>
                <img src={el.image} className="w-20 h-16 mx-auto" />
              </div>
            ))}
        </div>

        <h1 className="text-3xl text-white mt-8">Outils</h1>
        <div className="grid grid-cols-3 gap-4 place-content-center my-5 flew-wrap">
          {dataSkills
            .filter((outil) => outil.catégorie === "Outil")
            .map((el) => (
              <div className="grid-cols-1 mx-auto my-5">
                <div className="mx-5  mb-3 text-xl text-white object-center">
                  {el.element}
                </div>
                <img src={el.image} className="w-20 h-16 mx-auto" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
