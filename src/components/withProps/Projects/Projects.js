import React from "react";
import styled, { keyframes } from "styled-components";
import arrowSVG from "../../../assets/icons/arrow.svg";
import Project from "./Project";

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
    transform: rotate(270deg) ;
  }
  to {
      transform: rotate(90deg) scale(.7);
      
  }
`;
const rotateOpen = keyframes`
  from { 
    transform: rotate(90deg) scale(.7);
  }
  to {
      transform: rotate(270deg);
  }
`;
const fade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-70px);
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
const arrowContainerShrink = keyframes`
  from {
    height: 61px;
  }
  to {
    height: 46px;
  }
`;
const ProjectsContainer = styled.div`
  grid-column: 1 / 11;
  grid-row: 1/11;
  background-color: #292a2c;
  padding: 23px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Slide = styled(ProjectsContainer)`
  background-color: #1e2c42;
  position: absolute;
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  animation: ${closeProjects} 1.5s ease forwards;
  box-shadow: inset -1px -1px 9px 3px rgba(33, 33, 33, 0.6);
  &.openSlide {
    animation: ${openProjects} 1.5s ease forwards;
  }
`;

const Heading = styled.h1`
  font-size: 40px;
  align-self: flex-start;
  margin-bottom: auto;
  animation: ${fade} 0.76s ease forwards;
`;
const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 60px);
  display: flex;
  justify-content: center;
  &.shrinkContainer {
    height: 50px;
    animation: ${arrowContainerShrink} 0.7s ease forwards;
  }
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
        <ArrowContainer className="shrinkContainer">
          <Arrow src={arrowSVG} onClick={toggleOpen} />
        </ArrowContainer>
      </Slide>

      <ProjectsContainer>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </ProjectsContainer>
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
