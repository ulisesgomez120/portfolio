import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: pink;
`;
const Nav = () => {
  return (
    <NavContainer>
      <a href="#projects">Projects</a>
    </NavContainer>
  );
};

export default Nav;
