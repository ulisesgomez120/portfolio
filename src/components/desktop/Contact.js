import React from "react";
import styled from "styled-components";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const StyledContact = styled.footer`
  padding: 33px 0 220px;
  text-align: center;
  background-color: hsl(220, 4%, 17%);
  &.desktop {
    text-align: initial;
    grid-column: 1 / 11;
    grid-row: 11/-1;
    background-color: #1e2c42;
    padding: 23px;
    display: flex;
    box-shadow: inset -1px -1px 9px 3px rgba(33, 33, 33, 0.6);
    z-index: 1;
  }
`;
const H2 = styled.h2`
  font-size: 27px;
  flex: 0 0 20%;
  margin-bottom: 16px;
  &.desktop {
    margin-right: 20px;
    margin-bottom: 0;
  }
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
  padding: 16px;
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

const Contact = ({ desktop }) => {
  return (
    <StyledContact className={desktop || null}>
      <H2 className={desktop || null}>Contact</H2>
      <FlexChild>
        <a href="mailto:ulisesgomez120@gmail.com">ulisesgomez120@gmail.com</a>
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
