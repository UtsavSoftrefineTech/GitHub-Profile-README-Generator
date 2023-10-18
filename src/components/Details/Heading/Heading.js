import React from "react";
import styled from "styled-components";

// Heading Styling
const HeadingWapper = styled.h1`
  font-size: 2.5rem;
  color: #000000b7;
  margin-bottom: 1rem;
`;

const Heading = (props) => {
  return (
    <>
      <HeadingWapper>{props.heading}</HeadingWapper>
    </>
  );
};

export default Heading;
