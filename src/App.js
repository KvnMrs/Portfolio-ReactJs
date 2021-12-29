import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import BarNav from "./components/communs/BarNav";
// import Experiences from "./components/uniques/Experiences";

function App() {
  return (
    <>
      <div className="bg-light_blue flex h-screen w-screen  ">
        {/* Barre Nav */}
        <BarNav />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/cv/experiences" element={<Experiences />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
