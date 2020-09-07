import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  border: 4px solid #dbc48e;
  border-radius: 3px;

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
const Project = (props) => {
  return (
    <a
      href={props.url}
      style={{ flex: "0 1 400px", margin: "15px", height: "300px" }}
    >
      <Card tabIndex="1" img={props.imgUrl}></Card>
    </a>
  );
};

export default Project;
