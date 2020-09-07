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
  box-shadow: inset -1px -1px 9px 3px rgba(33, 33, 33, 0.6);
`;
const H3 = styled.h3`
  font-size: 27px;
  flex: 0 0 20%;
`;
const FlexChild = styled.div`
  flex: 0 0 15%;
  display: flex;
  padding-top: 4px;
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
const Link = styled.a`
  color: #f7d891;
`;
const Contact = () => {
  return (
    <StyledContact>
      <H3>Contact</H3>
      <FlexChild>
        <Link href="mailto:ulisesgomez120@gmail.com">
          ulisesgomez120@gmail.com
        </Link>
        <IconContainer>
          <IconLink href="https://www.linkedin.com/in/ulises-gomez/">
            <img src={linkedinIcon} alt="linkedin" />
          </IconLink>
          <IconLink href="https://github.com/ulisesgomez120">
            <img src={githubIcon} alt="github" />
          </IconLink>
        </IconContainer>
      </FlexChild>
    </StyledContact>
  );
};

export default Contact;
