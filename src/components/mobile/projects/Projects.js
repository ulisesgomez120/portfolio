import React from "react";
import styled from "styled-components";
import Project from "../../desktop/withProps/projects/Project";
import tlUrl from "../../../assets/images/taniaLucely.jpg";
import buUrl from "../../../assets/images/budgetMe.jpg";
import ugUrl from "../../../assets/images/ugelp.jpg";
import lhUrl from "../../../assets/images/luxHotel.jpg";

export const projectsData = [
  { siteUrl: "https://www.tania-lucely.com/", imgUrl: tlUrl },
  { siteUrl: "https://budgetplan.netlify.app/", imgUrl: buUrl },
  { siteUrl: "https://ugelp.netlify.app/", imgUrl: ugUrl },
  { siteUrl: "https://luxhotel.netlify.app/", imgUrl: lhUrl },
];
const ProjectsContainer = styled.section`
  padding: 15px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: hsl(220, 4%, 17%);
`;

const projectJsx = projectsData.map(({ imgUrl, siteUrl }, i) => (
  <Project key={i} imgUrl={imgUrl} url={siteUrl} mobile="mobile" />
));

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h1 style={{ flex: "1 0 100%", textAlign: "center" }}>Projects</h1>
      {projectJsx}
    </ProjectsContainer>
  );
};

export default Projects;
