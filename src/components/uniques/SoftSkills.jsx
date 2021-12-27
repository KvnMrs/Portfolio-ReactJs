import React from "react";
import dataSkills from "../../datas/DatasSkills";

const SoftSkills = () => {
  return (
    <>
      <h1 className="text-3xl text-white mt-16">Mes atouts</h1>
      <div className="flex place-content-center my-5">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((el) => (
            <div className="grid-cols-1 mx-auto my-5">
              <div className="mx-5  mb-3 text-xl text-white object-center">
                {el.element}
              </div>
              <img src={el.image} className="w-20 h-16 mx-auto" />
            </div>
          ))}
      </div>
    </>
  );
};

export default SoftSkills;
