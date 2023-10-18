import React, { useState } from "react";
import styled, { css } from "styled-components";

// Button Styling
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  font-size: 1.5rem;
  padding: 0 2rem;
  border-radius: 4px;
  border: none;
  border: 0.2rem solid black;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #f5f5f5;
    cursor: pointer;
    background-color: #333;
  }

  @media only screen and (max-width: 768px) {
    height: 3rem;
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  ${(props) =>
    props.animation === "copy" &&
    css`
      animation: copyAnimation 0.5s ease-in-out;
    `}

  ${(props) =>
    props.animation === "download" &&
    css`
      animation: downloadAnimation 0.5s ease-in-out;
    `}

  @keyframes copyAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes downloadAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ActionLogo = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
  line-height: 0;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ActionText = styled.p`
  font-size: 1.5rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ActionButton = ({ onClick, icon, text }) => {
  // State for the animation
  const [isClicked, setIsClicked] = useState(false);

  // Handle the click event
  const handleClick = () => {
    setIsClicked(true);
    onClick();

    // Reset the animation after a short delay (0.5s in this case)
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  // Set the animation based on the text
  let animation = "";
  if (text === "copy markdown") {
    animation = "copy";
  } else if (text === "download readme.md") {
    animation = "download";
  }

  return (
    <Button onClick={handleClick} animation={isClicked ? animation : ""}>
      <ActionLogo>
        <ion-icon name={icon}></ion-icon>
      </ActionLogo>
      <ActionText>{text}</ActionText>
    </Button>
  );
};

export default ActionButton;
