import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  button,
  input {
    font-family: inherit;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;
export default GlobalStyles;
