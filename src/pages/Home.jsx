import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/communs/Button";

const Home = () => {
  return (
    <>
      <div className="text-center self-center flex-auto text-white pt-28 lg:pt-0 ">
        {/* <div className=" lg:mt-20"> */}
        <h1 className="text-3xl lg:text-4xl">Bonjour et bienvenue. 🙂</h1>
        {/* </div> */}

        <div>
          <p className="text-2xl mt-20">
            Je suis
            <span className="text-white font-bold text-2xl"> Kévin Marais</span>
          </p>
          <h2 className="text-2xl">
            En formation{" "}
            <span className="text-white font-bold text-2xl">
              {" "}
              Développeur Web full stack{" "}
            </span>
          </h2>
        </div>
        <div>
          <Link to="/a-propos">
            <Button className="mt-10">Continuer</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
