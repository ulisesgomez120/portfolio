import React from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import About from "./About";
const MobileContainer = () => {
  return (
    <main>
      <Projects />
      <About />
      <Nav />
    </main>
  );
};

export default MobileContainer;
