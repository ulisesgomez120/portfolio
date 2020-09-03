import React from "react";
import styled from "styled-components";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const StyledContact = styled.div`
  grid-column: 1 / 11;
  grid-row: 11/-1;
  background-color: #1e2c42;
  padding: 23px;
  display: flex;
`;
const H3 = styled.h3`
  font-size: 27px;
  flex: 0 0 20%;
`;
const FlexChild = styled.div`
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a`
  background: #162131;
  padding: 9px 9px 7px 10px;
  border-radius: 50%;
  box-shadow: 0px 1px 1px #2b405f, 0px -1px 1px #2b405f;
  &:first-child {
    margin-right: 40px;
  }
`;
const Contact = () => {
  return (
    <StyledContact>
      <H3>Contact</H3>
      <FlexChild>
        <a href="mailto:ulisesgomez120@gmail.com">ulisesgomez120@gmail.com</a>
        <IconContainer>
          <IconLink href="#">
            <img src={linkedinIcon} />
          </IconLink>
          <IconLink href="#">
            <img src={githubIcon} />
          </IconLink>
        </IconContainer>
      </FlexChild>
    </StyledContact>
  );
};

export default Contact;
