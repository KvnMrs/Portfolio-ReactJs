import React from "react";
import dataSkills from "../../datas/DatasSkills";

const SoftSkills = () => {
  return (
    <>
      <h1 className="text-3xl text-white pb-2 border-b w-60 mx-auto">
        Mes atouts
      </h1>
      <div className="flex place-content-center my-2 mx-auto flex-wrap">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((el) => (
            <div className="flex flex-col items-center my-5 ">
              <div className="mx-8 lg:mx-5 mb-3 text-lg lg:text-2xl text-white ">
                {el.element}
              </div>
              <div className="items-center w-12 md:w-14 lg:w-16 p-2 border bg-dark_blue rounded-lg">
                <img alt={el.catégorie} src={el.image} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SoftSkills;
