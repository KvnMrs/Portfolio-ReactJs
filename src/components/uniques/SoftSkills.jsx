import React from "react";
import "./Style.css";
import dataSkills from "../../datas/DatasSkills";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Button from "../communs/Button";

const SoftSkills = () => {
  return (
    <>
      {/* Title */}
      <h1 className="text-3xl text-white pb-2 border-b w-60 mx-auto">
        Mes atouts
      </h1>
      {/* Clickable icon */}
      <div className="flex place-content-center my-2 mx-auto flex-wrap">
        {dataSkills
          .filter((atout) => atout.catégorie === "Atout")
          .map((el) => (
            <Popup
              trigger={
                <button type="button">
                  <div className="flex flex-col items-center my-5 mx-2 ">
                    <div className=" lg:mx-5 mb-3 text-lg lg:text-2xl text-white ">
                      {el.element}
                    </div>
                    <div className="items-center mx-6 w-12 md:w-14 lg:w-16 p-2 border bg-dark_blue rounded-lg">
                      <img alt={el.catégorie} src={el.image} />
                    </div>
                  </div>
                </button>
              }
              position="right center"
              modal
              nested
            >
              {/* Modal*/}
              {(close) => (
                <div className="bg-light_blue w-full flex flex-col text-center p-2 py-6">
                  <h3 className="text-white text-xl self-center">
                    {el.element}
                  </h3>
                  <p className="py-5 text-white"> {el.description} </p>
                  <button className="self-center py-3" onClick={close}>
                    <Button>Fermer</Button>
                  </button>
                </div>
              )}
            </Popup>
          ))}
      </div>
    </>
  );
};

export default SoftSkills;
