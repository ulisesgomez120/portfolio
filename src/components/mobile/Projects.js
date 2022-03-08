import React from "react";
import styled from "styled-components";
import Project from "../desktop/withProps/Projects/Project";
import tlUrl from "../../assets/images/taniaLucelyMobile.png";
import buUrl from "../../assets/images/stockTargets.png";
import ugUrl from "../../assets/images/ugelp.jpg";

const projectsData = [
  { siteUrl: "https://www.tania-lucely.com/", imgUrl: tlUrl },
  {
    siteUrl:
      "https://chrome.google.com/webstore/detail/stock-price-targets/pmiooplogkhdohpabeokdhinbailcoif",
    imgUrl: buUrl,
  },
  { siteUrl: "https://ugelp.netlify.app/", imgUrl: ugUrl },
];
const ProjectsContainer = styled.section`
  padding: 25px 0px 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: hsl(220, 4%, 17%);
`;

const projectJsx = projectsData.map(({ imgUrl, siteUrl }, i) => (
  <Project key={i} imgUrl={imgUrl} url={siteUrl} mobile='mobile' />
));

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <h1 style={{ flex: "1 0 100%", textAlign: "center" }}>Projects</h1>
      {projectJsx}
    </ProjectsContainer>
  );
};

export default Projects;
