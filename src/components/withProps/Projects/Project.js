import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  flex: 0 1 250px;
  height: 200px;
  border: 2px solid #dbc48e;
  margin: 15px;
  @media (max-width: 919px) {
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
