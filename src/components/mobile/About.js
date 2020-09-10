import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  text-align: ${({ align }) => align || "left"};
  margin: ${({ margin }) => margin || "30px"};
  opacity: ${({ opacity }) => opacity || "80%"};
`;

const About = () => {
  return (
    <div style={{ backgroundColor: "#1E2C42", padding: "25px 0 45px" }}>
      <h2 style={{ textAlign: "center" }}>About</h2>
      <P>A firm believer in</P>
      <P
        fontSize="1.4em"
        color="#f7d891"
        align="right"
        margin="30px 45px"
        opacity="100%"
      >
        Getting After It!
      </P>
      <P>and answering most problems with one word</P>
      <P
        fontSize="1.6em"
        color="#f7d891"
        align="right"
        margin="30px 55px"
        opacity="100%"
      >
        GOOD.
      </P>
      <P>
        I can work through out the web stack, but enjoy working on the front-end
        the most. I especially like{" "}
        <span style={{ color: "#61DBFB" }}>React</span> and have been using
        styled-components lately. A full list of my skills can be found on my
        resume --{">"} Ulises_Gomez.pdf
      </P>
      <P>
        Apart from a programmer, I am also a Husband, a gammer, and, once Covid
        is clear, I want to practice jiu-jitsu. I am always looking for new
        challenges and believe self development is very important.
      </P>
    </div>
  );
};

export default About;
