import React, { useState } from "react";
import styled from "styled-components";
import About from "./components/desktop/withProps/About";
import Contact from "./components/desktop/Contact";
import Projects from "./components/desktop/withProps/projects/Projects";
import MobileContainer from "./components/mobile/MobileContainer";

const Grid = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #292a2c;
  position: relative;
  display: grid;
  border-bottom: solid 15px rgba(137, 67, 22, 0.81);
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(13, 1fr);
`;

function App() {
  let [aboutOpen, setAboutOpen] = useState(false);
  let [projectsOpen, setProjectsOpen] = useState(false);
  console.log(window.innerWidth);
  let display;
  let desktopJsx = (
    <Grid>
      <Projects
        toggleOpen={(event) => {
          if (event.key === "Enter" || event.type === "click") {
            if (aboutOpen) setAboutOpen(false);
            setProjectsOpen(!projectsOpen);
          }
        }}
        open={projectsOpen}
      />

      <About
        toggleOpen={(event) => {
          if (event.key === "Enter" || event.type === "click") {
            console.log(event.type);
            if (projectsOpen) setProjectsOpen(false);
            setAboutOpen(!aboutOpen);
          }
        }}
        open={aboutOpen}
      />

      <Contact />
    </Grid>
  );
  if (window.innerWidth < 760) {
    display = <MobileContainer />;
  } else {
    display = desktopJsx;
  }
  return display;
}

export default App;
