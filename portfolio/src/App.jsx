import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import DataEngineer from "./pages/DataEngineer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import CertificatesAndAchievements from "./pages/CertificateAndAchievements";


function App() {
  return (
    <Router>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="About" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Experiences" element={<Experience />} />
          <Route path="Projects" element={<Projects />} />
          <Route
            path="/CertificationsAndAchievements"
            element={<CertificatesAndAchievements />}
          />
          <Route
            path="/resume/data-engineer"
            element={<DataEngineer />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;