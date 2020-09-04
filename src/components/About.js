import React from "react";
import styled, { keyframes } from "styled-components";
import arrowSVG from "../assets/icons/arrow.svg";

const openAbout = keyframes`
  from {
    left: 0;
    background-color: hsl(217, 38%, 19%);
  }

  to {
    left: -200px;
    background-color: hsl(220, 4%, 17%);
  }
`;
const closeAbout = keyframes`
  from {
    left: -200px;
    background-color: hsl(220, 4%, 17%);
  }

  to {
    left: 0px;
    background-color: hsl(217, 38%, 19%);
  }
`;
const rotateClosed = keyframes`
  from { 
    transform: rotate(0deg);
  }
  to {
      transform: rotate(-180deg);
  }
`;
const rotateOpen = keyframes`
  from { 
    transform: rotate(-180deg);
  }
  to {
      transform: rotate(0deg);
  }
`;
const Closed = styled.div`
  grid-column: 11 / -1;
  grid-row: 1/-1;
  position: absolute;
  padding: 23px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsl(217, 38%, 19%);
  animation: ${closeAbout} 0.9s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;
const Open = styled(Closed)`
  background-color: hsl(220, 4%, 17%);
  animation: ${openAbout} 0.7s cubic-bezier(0.07, 0.58, 0.67, 1.07) forwards;
`;
const P = styled.p`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  text-align: ${({ align }) => align || "left"};
  margin: 30px;
`;
const ArrowContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const Arrow = styled.img`
  cursor: pointer;
  &.closed {
    animation: ${rotateClosed} 0.7s ease forwards;
  }
  &.open {
    animation: ${rotateOpen} 0.7s ease forwards;
  }
`;

const About = ({ open, toggleOpen }) => {
  return open ? (
    <Open>
      <h2 style={{ color: "#17191c" }}>About</h2>
      <div style={{ display: "flex", height: "100%" }}>
        <ArrowContainer>
          <Arrow src={arrowSVG} onClick={toggleOpen} className="open" />
        </ArrowContainer>
        <div>
          <P>A firm believer in</P>
          <P fontSize="1.4em" color="#f7d891" align="right" margin>
            Getting After It!
          </P>
          <P>and answering most problems with one word</P>
          <P fontSize="1.6em" color="#f7d891" align="right">
            GOOD.
          </P>
          <P>
            I can work through out the web stack, but enjoy working on the
            front-end the most. I especially like{" "}
            <span style={{ color: "#61DBFB" }}>React</span> and have been using
            styled-components lately. A full list of my skills can be found on
            my resume --{">"} Ulises_Gomez.pdf
          </P>
          <P>
            Apart from a programmer, I am also a Husband, a gammer, and, once
            Covid is clear, I want to practice jiu-jitsu. I am always looking
            for new challenges and believe self development is very important.
          </P>
        </div>
      </div>
    </Open>
  ) : (
    <Closed>
      <h2>About</h2>
      <ArrowContainer>
        <Arrow src={arrowSVG} onClick={toggleOpen} className="closed" />
      </ArrowContainer>
    </Closed>
  );
};

export default About;
