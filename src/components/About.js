import React from "react";
import styled, { keyframes } from "styled-components";

const openAbout = keyframes`
  from {
    left: 0;
    background-color: hsl(217, 38%, 19%);
  }

  to {
    left: -200px;
    background-color: hsl(220, 4%, 17%);
  }
`;
const closeAbout = keyframes`
  from {
    left: -200px;
    background-color: hsl(220, 4%, 17%);
  }

  to {
    left: 0px;
    background-color: hsl(217, 38%, 19%);
  }
`;
const Closed = styled.div`
  grid-column: 11 / -1;
  grid-row: 1/-1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsl(217, 38%, 19%);
  animation: ${closeAbout} 0.9s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;
const Open = styled(Closed)`
  background-color: hsl(220, 4%, 17%);
  animation: ${openAbout} 0.7s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;

const About = ({ open, toggleOpen }) => {
  return open ? (
    <Open onClick={toggleOpen}>Open</Open>
  ) : (
    <Closed onClick={toggleOpen}>
      <h2>About</h2>
    </Closed>
  );
};

export default About;
