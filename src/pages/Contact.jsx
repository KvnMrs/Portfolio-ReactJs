import React, { useState } from "react";
import Button from "../components/communs/Button";

const Contact = () => {
  const [reason, setReason] = useState("Contact professionel");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="w-full flex flex-col pt-10 lg:pt-0 items-center shadow-2xl ">
        <p className="text-lg lg:text-2xl text-white text-center h-1/6 mt-10 mx-1 mb-5">
          Un contact professionel, une question, un feedback <br />
          contactez-moi 📝
        </p>{" "}
        <div className="w-10/12 xl:w-7/12 bg-dark_blue gradiant-dark rounded-2xl h-5/6 mb-5  py-8 shadow-2xl ">
          <form className="grid grid-cols-1 h-full w-7/12 mx-auto">
            <label className="h-2 mt-5 mb-5 text-white" htmlFor="reason">
              Motif :
            </label>

            <select id="reason" onChange={(e) => setReason(e.target.value)}>
              <option>Contact professionel</option>
              <option>Question(s)</option>
              <option>feedback</option>
            </select>

            <label className="h-2 mt-5 mb-5 text-white" htmlFor="nom">
              Prénom :
            </label>
            <input
              id="nom"
              type="nom"
              name="nom"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="py-0.5"
            />
            <label className="h-2 mt-5 mb-5 text-white" htmlFor="prenom">
              Nom :
            </label>
            <input
              id="prenom"
              type="prenom"
              name="prenom"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="py-0.5"
            />
            <label className="h-2 mt-5 mb-5 text-white" htmlFor="email">
              Adresse Mail :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="py-0.5"
            />
            <label className="h-2 mt-5 mb-5 text-white" htmlFor="phone">
              Téléphone :
            </label>
            <input
              id="phone"
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-0.5"
            />
            <label className="h-2 mt-5 mb-5 text-white" htmlFor="message">
              Votre message :
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-36"
            />

            <a
              href={`mailto:kevin.mrs2020@gmail.com?subject=${reason}&body=${firstname} ${lastname.toUpperCase()}%0A${mail}%0A${phone}%0A%0A${message}`}
              className="text-center"
            >
              <Button type="submit" className="mt-8">
                Envoyer
              </Button>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
