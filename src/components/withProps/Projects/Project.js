import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: yellow;
  flex: 1 1 300px;
  height: 200px;
  margin: 15px;
  @media (max-width: 919px) {
    &:first-child {
      margin-top: 30px;
    }
  }
`;
const Project = () => {
  return <Card>Hello</Card>;
};

export default Project;
