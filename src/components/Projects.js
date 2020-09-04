import React from "react";
import styled, { keyframes } from "styled-components";

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
const ProjectsContainer = styled.div`
  grid-column: 1 / 11;
  grid-row: 1/11;
  background-color: #292a2c;
  padding: 23px;
`;
const Closed = styled(ProjectsContainer)`
  background-color: #1e2c42;
  position: absolute;
  width: 100%;
  animation: ${closeProjects} 2s ease forwards;
  box-shadow: inset -1px -1px 9px 3px rgba(33, 33, 33, 0.6);
`;
const Open = styled(Closed)`
  animation: ${openProjects} 2s ease forwards;
`;
const Heading = styled.h1`
  font-size: 40px;
`;
const Projects = ({ open, toggleOpen }) => {
  const openProjectStructured = (
    <React.Fragment>
      <Open />
      <ProjectsContainer onClick={toggleOpen}> Open</ProjectsContainer>
    </React.Fragment>
  );
  return open ? (
    openProjectStructured
  ) : (
    <Closed onClick={toggleOpen}>
      <Heading>Projects</Heading>
    </Closed>
  );
};

export default Projects;
