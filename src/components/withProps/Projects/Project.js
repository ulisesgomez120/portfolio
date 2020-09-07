import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  flex: 0 1 400px;
  height: 300px;
  border: 4px solid #dbc48e;
  border-radius: 3px;
  margin: 15px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(16, 17, 18, 30%);
  }
  @media (max-width: 1178px) {
    &:first-child {
      margin-top: 30px;
    }
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: rgba(28, 30, 34, 0.48);
`;
const Project = (props) => {
  return <Card url={props.url}></Card>;
};

export default Project;
