import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    @media only screen and (max-width: 768px) {
      font-size: 50%;
    }
  }

  body {
    background-color: #fdfdfd;
    font-family: 'Roboto Mono', sans-serif;
    line-height: 1;
  }
`;

export default GlobalStyle;
