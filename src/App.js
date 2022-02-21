import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import BarNavDesktop from "./components/communs/BarNavDesktop";
import BarNavMobile from "./components/communs/BarNavMobile";

function App() {
  return (
    <>
      <div className="bg-light_blue flex w-screen h-full min-h-screen">
        {/* Barre Nav */}
        <BarNavDesktop />
        <BarNavMobile />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
