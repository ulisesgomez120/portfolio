import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  border: 3px solid #dbc48e;
  border-radius: 3px;
  ${
    "" /* &:hover {
    background-image: url(${({ mobileImg, img }) =>
      mobileImg ? mobileImg : img});
  } */
  }
  ${"" /* change mobile css */}
  &.mobile {
    border-left: none;
    border-right: none;
  }
`;
const Link = styled.a`
  flex: 0 1 650px;
  margin: 15px;
  height: 328px;
  &.mobile {
    margin: 15px 0;
  }
  @media (max-width: 1178px) and (min-width: 761px) {
    &:first-child {
      margin-top: 30px;
    }
  }
`;

// fix images of projects
const Project = (props) => {
  return (
    <Link tabIndex='0' className={props.mobile || null} href={props.url}>
      <Card
        className={props.mobile || null}
        img={props.imgUrl}
        mobileImg={props.mobileImg}>
        {/* <img src={props.imgUrl} /> */}
      </Card>
    </Link>
  );
};

export default Project;
