import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>Bienvenue !</h1>
      </div>

      <div>
        <h1>Kévin Marais</h1>
        <h2>En formation Developpeur Web full stack</h2>
      </div>
      <div>
        <Link to="/a-propos">
          <button type="button">Continuer</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
