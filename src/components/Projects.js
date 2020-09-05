import React from "react";
import styled, { keyframes } from "styled-components";
import arrowSVG from "../assets/icons/arrow.svg";

const closeProjects = keyframes`
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
`;
const openProjects = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`;
const rotateClosed = keyframes`
  from { 
    transform: rotate(270deg);
  }
  to {
      transform: rotate(90deg);
  }
`;
const rotateOpen = keyframes`
  from { 
    transform: rotate(90deg);
  }
  to {
      transform: rotate(270deg);
  }
`;
const fade = keyframes`
  from {
    opacity: 0;
    // transform: translate(30px, -70px);
  }
  to {
    opacity: 1;
  }
`;
// const Li = styled.li`
//   opacity: 0;
//   animation: ${Stagger} 350ms ${(props) => props.delay * 100 + "ms"} ease
//     forwards;
// `;
const ProjectsContainer = styled.div`
  grid-column: 1 / 11;
  grid-row: 1/11;
  background-color: #292a2c;
  padding: 23px;
`;
const Slide = styled(ProjectsContainer)`
  background-color: #1e2c42;
  position: absolute;
  width: 100%;
  display: flex;
  padding-bottom: 50px;
  flex-direction: column;
  animation: ${closeProjects} 1.5s ease forwards;
  box-shadow: inset -1px -1px 9px 3px rgba(33, 33, 33, 0.6);
  &.openSlide {
    animation: ${openProjects} 1.5s ease forwards;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  animation: ${fade} 0.76s ease forwards;
`;
const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 60px);
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
const Arrow = styled.img`
  cursor: pointer;
  animation: ${rotateClosed} 0.7s ease forwards;
  &.openArrow {
    animation: ${rotateOpen} 0.7s ease forwards;
  }
`;
const Projects = ({ open, toggleOpen }) => {
  const openProjectStructured = (
    <React.Fragment>
      <Slide className="openSlide">
        <ArrowContainer>
          <Arrow src={arrowSVG} onClick={toggleOpen} />
        </ArrowContainer>
      </Slide>

      <ProjectsContainer> Open</ProjectsContainer>
    </React.Fragment>
  );
  return open ? (
    openProjectStructured
  ) : (
    <Slide>
      <Heading>Projects</Heading>
      <ArrowContainer>
        <Arrow src={arrowSVG} className="openArrow" onClick={toggleOpen} />
      </ArrowContainer>
    </Slide>
  );
};

export default Projects;
