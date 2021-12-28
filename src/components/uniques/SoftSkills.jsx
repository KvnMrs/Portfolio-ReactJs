import React from "react";
import dataSkills from "../../datas/DatasSkills";

const SoftSkills = () => {
  return (
    <>
      <h1 className="text-3xl text-white mt-20">Mes atouts</h1>
      <div className="flex place-content-center my-5">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((el) => (
            <div className="flex flex-col items-center my-5">
              <div className="mx-5  mb-3 text-2xl text-white ">
                {el.element}
              </div>
              <div className="items-center w-20  p-2 border-4 border-dark_blue rounded-lg">
                <img src={el.image} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SoftSkills;
