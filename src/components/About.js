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
  padding: 23px;
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
const Stagger = keyframes`
  from {
    opacity: 0;
    transform: translate(30px, -70px);
  }
  to {
    opacity: 1;
  }
`;
const Li = styled.li`
  opacity: 0;
  animation: ${Stagger} 350ms ${(props) => props.delay * 100 + "ms"} ease
    forwards;
`;
const About = ({ open, toggleOpen }) => {
  return open ? (
    <Open onClick={toggleOpen}>
      Open
      <ul>
        <Li delay=".5">Gold test</Li>
        <Li delay="2">pink test</Li>
        <Li delay="3">pink test</Li>
        <Li delay="2">pink test</Li>
      </ul>
    </Open>
  ) : (
    <Closed onClick={toggleOpen}>
      <h2>About</h2>
    </Closed>
  );
};

export default About;
