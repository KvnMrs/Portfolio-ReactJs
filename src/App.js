import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";
import Portefolio from "./pages/Portefolio";
import BarNav from "./components/communs/barNav/BarNav";

function App() {
  return (
    <>
      <div className="bg-light_blue flex">
        {/* Barre Nav */}
        <BarNav />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portefolio" element={<Portefolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
