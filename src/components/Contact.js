import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  grid-column: 1 / 11;
  grid-row: 11/-1;
  background-color: #1e2c42;
`;
const Contact = () => {
  return <StyledContact>Contact</StyledContact>;
};

export default Contact;
