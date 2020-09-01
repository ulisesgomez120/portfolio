import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const openAbout = keyframes`
  from {
    left: 0;
  }

  to {
    left: -200px;
  }
`;
const closeAbout = keyframes`
  from {
    left: -200px;
  }

  to {
    left: 0px;
  }
`;
const AboutClosed = styled.div`
  grid-column: 11 / -1;
  grid-row: 1/-1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: orange;
  animation: ${closeAbout} 0.7s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;
const AboutOpen = styled.div`
  grid-column: 11 / -1;
  grid-row: 1/-1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: orange;
  animation: ${openAbout} 0.7s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;

const About = ({ open, setOpen }) => {
  return open ? (
    <AboutOpen onClick={setOpen}>Open</AboutOpen>
  ) : (
    <AboutClosed onClick={setOpen}>Closed</AboutClosed>
  );
};

export default About;
