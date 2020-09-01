import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  grid-column: 1 / 11;
  grid-row: 11/-1;
  background-color: yellow;
`;
const Contact = () => {
  return <StyledContact>Contact</StyledContact>;
};

export default Contact;
