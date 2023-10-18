import React from "react";
import styled, { css } from "styled-components";

// Input Styling
const InputField = styled.input`
  width: ${(props) => props.width};
  height: 3rem;
  padding: 0.5rem;
  margin-right: 3rem;
  font-size: 1.8rem;
  font-weight: 500;

  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-bottom: 2px solid black;

  @media only screen and (max-width: 450px) {
    margin-right: 1rem;
  }

  ${(props) =>
    /link/.test(props.placeholder) &&
    css`
      color: #2b6cb0;
    `}
`;
const Input = (props) => {
  // Handle input change
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <>
      <InputField
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        width={props.width}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
