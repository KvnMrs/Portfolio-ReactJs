import React from "react";
import SoftSkills from "../components/uniques/SoftSkills";
import { Link } from "react-router-dom";
import Button from "../components/communs/Button";

const About = () => {
  return (
    <>
      <div className="text-center my-auto p-4">
        <h2 className="text-white text-3xl pb-2 border-b w-72 mx-auto">
          En quelques mots...
        </h2>
        <p className="text-gray-200 text-xl md:text-2xl text-justify px-10 my-6 lg:my-12">
          Nantais de 27 ans qui a décidé de faire prendre un
          <span className="font-bold"> tournant</span> à sa vie
          <span className="font-bold"> professionnelle</span>.
          <span className="font-bold"> Actuellement</span> en formation au sein
          de la
          <span className="text-wild_red font-bold text-1xl">
            {" "}
            Wild Code School
          </span>
          , je <span className="font-bold">recherche</span> un
          <span className="font-bold"> stage </span>afin de continuer à
          <span className="font-bold"> acquérir </span>
          plus d'<span className="font-bold">expériences </span>et de
          <span className="font-bold"> techniques</span>. Issu de secteurs basés
          sur la relation client, je connais l'importance de la recherche des
          besoins et du suivi de ce dernier, afin d'aboutir à une satisfaction
          commune et partagée.
        </p>
        <SoftSkills />

        <Link to="/cv">
          <Button className="my-6">Continuer</Button>
        </Link>
      </div>
    </>
  );
};

export default About;
