import React from "react";
import dataSkills from "../../datas/DatasSkills";
import Modal from "react-modal";
import Button from "../communs/Button";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const SoftSkills = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "radial-gradient(#37577a, #1e2c46)";
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <h1 className="text-3xl text-white pb-2 border-b w-60 mx-auto">
          Mes atouts
        </h1>
        <div className="flex place-content-center my-2 mx-auto flex-wrap">
          {dataSkills
            .filter((atout) => atout.catégorie === "Atout")
            .map((el) => (
              <button onClick={openModal}>
                <div className="flex flex-col items-center my-5 mx-2 ">
                  <div className=" lg:mx-5 mb-3 text-lg lg:text-2xl text-white ">
                    {el.element}
                  </div>
                  <div className="items-center mx-6 w-12 md:w-14 lg:w-16 p-2 border bg-dark_blue rounded-lg">
                    <img alt={el.catégorie} src={el.image} />
                  </div>
                </div>
              </button>
            ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          // className={"grdiant-dark"}
        >
          <Button onClick={closeModal}>close</Button>
        </Modal>
      </div>
    </>
  );
};

export default SoftSkills;
