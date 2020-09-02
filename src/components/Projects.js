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
`;
const Closed = styled(ProjectsContainer)`
  background-color: #1e2c42;
  position: absolute;
  width: 100%;
  animation: ${closeProjects} 2s ease forwards;
`;
const Open = styled(Closed)`
  animation: ${openProjects} 2s ease forwards;
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
      <h1>Projects</h1>
    </Closed>
  );
};

export default Projects;
