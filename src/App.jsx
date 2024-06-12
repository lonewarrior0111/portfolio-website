import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./pages/about/index";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const renderTsParticlesOnlyOnHomePage = location.pathname === "/";
  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* {particles.js} */}
      {renderTsParticlesOnlyOnHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
