import { Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/about/index";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      {/* {particles.js} */}

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
