import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 5px 0 0 0;
  width: 50%;
  height: 8%;
  background-color: #637e8e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Link = styled.a`
  margin-right: 12px;
  text-decoration: none;
  font-size: 23px;
`;
const Nav = () => {
  return (
    <NavContainer>
      <Link href="#projects">Projects</Link>
      <Link href="#about">About</Link>
    </NavContainer>
  );
};

export default Nav;
