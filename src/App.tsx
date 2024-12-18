import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "motion/react";

// Molecules
import Navbar from "./Components/Molecules/Navbar/Navbar";
import Footer from "./Components/Molecules/Footer/Footer";

// pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Parliamo from "./Pages/Parliamo/Parliamo";
import Project from "./Pages/Project/Project";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/parliamo" element={<Parliamo />} />
            <Route path="/project/:slug" element={<Project />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
