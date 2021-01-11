import React, { useState } from "react";
import styled from "styled-components";
import About from "./withProps/About";
import Contact from "./Contact";
import Projects from "./withProps/Projects/Projects";

const Grid = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #292a2c;
  position: relative;
  display: grid;
  border-bottom: solid 15px rgba(137, 67, 22, 0.81);
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(13, 1fr);
`;

const DesktopContainer = () => {
  let [aboutOpen, setAboutOpen] = useState(false);
  let [projectsOpen, setProjectsOpen] = useState(true);
  const toggleProjectsOpen = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (aboutOpen) setAboutOpen(false);
      setProjectsOpen(!projectsOpen);
    }
  };
  const toggleAboutOpen = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (projectsOpen) setProjectsOpen(false);
      setAboutOpen(!aboutOpen);
    }
  };
  return (
    <Grid>
      <Projects toggleOpen={toggleProjectsOpen} open={projectsOpen} />

      <About toggleOpen={toggleAboutOpen} open={aboutOpen} />

      <Contact desktop='desktop' />
    </Grid>
  );
};

export default DesktopContainer;
