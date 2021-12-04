import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Knowleges from "./pages/Knowleges";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/a-propos" element={<About />} />
        <Route exact path="/competences" element={<Knowleges />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
