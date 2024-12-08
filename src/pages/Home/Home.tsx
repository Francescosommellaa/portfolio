import React from "react";

// SCSS
import "./Home.scss";

// Molecules
import Hero from "../../Components/Molecules/Hero/Hero";
import Work from "../../Components/Molecules/Work/Work";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Work />
    </main>
  );
};

export default Home;
