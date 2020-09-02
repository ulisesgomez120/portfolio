import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
const Grid = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #292a2c;
  position: relative;
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(10, 1fr) 1fr 1fr 1fr;
`;

function App() {
  let [aboutOpen, setAboutOpen] = useState(false);
  let [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <Grid>
      <Projects
        toggleOpen={() => {
          if (aboutOpen) setAboutOpen(false);
          setProjectsOpen(!projectsOpen);
        }}
        open={projectsOpen}
      />
      <Contact />
      <About
        toggleOpen={() => {
          if (projectsOpen) setProjectsOpen(false);
          setAboutOpen(!aboutOpen);
        }}
        open={aboutOpen}
      />
    </Grid>
  );
}

export default App;
