import React from "react";
import styled from "styled-components";

// Button Styling
const ButtonContainer = styled.button`
  display: block;
  height: 5rem;
  font-size: 1.5rem;
  padding: 0 2rem;
  margin: 5rem auto;
  border-radius: 4px;
  border: none;
  border: 0.2rem solid black;
  transition: all 0.3s ease-in-out;
  animation: pulseShadow 0.6s infinite; /* Apply animation on hover */

  &:hover {
    color: #f5f5f5;
    cursor: pointer;
    background-color: #333;
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0);
    }
    25% {
      box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1);
    }
    50% {
      box-shadow: 0px 0px 0px 9px rgb(128, 128, 128, 0.2); /* Increase shadow intensity */
    }
    75% {
      box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1); /* Increase shadow intensity */
    }
    100% {
      box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0); /* Increase shadow intensity */
    }
  }
`;

const Button = ({ onClick }) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>Generate README</ButtonContainer>
    </>
  );
};

export default Button;
