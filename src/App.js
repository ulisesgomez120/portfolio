import React, { useState } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
const Grid = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: pink;
  position: relative;
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(10, 1fr) 1fr 1fr 1fr;
`;
const Portfolio = styled.div`
  grid-column: 1 / 11;
  grid-row: 1/11;
  background-color: teal;
`;

function App() {
  let [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Grid>
      <Portfolio>Portfolio</Portfolio>
      <Contact />
      <About setOpen={() => setAboutOpen(!aboutOpen)} open={aboutOpen} />
    </Grid>
  );
}

export default App;
