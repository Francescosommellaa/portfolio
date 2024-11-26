import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Molecules
import Navbar from "./Components/Molecules/Navbar/Navbar";
import Footer from "./Components/Molecules/Footer/Footer";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lavori from "./pages/Lavori/Lavori";
import Parliamo from "./pages/Parliamo/Parliamo";
import Progetto from "./pages/Progetto/Progetto";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lavori" element={<Lavori />} />
          <Route path="/parliamo" element={<Parliamo />} />
          <Route path="/progetto/:id" element={<Progetto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
