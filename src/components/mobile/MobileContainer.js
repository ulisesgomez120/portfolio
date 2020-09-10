import React from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import About from "./About";
import Contact from "../desktop/Contact";
const MobileContainer = () => {
  return (
    <main>
      <Projects />
      <About />
      <Contact />
      <Nav />
    </main>
  );
};

export default MobileContainer;
