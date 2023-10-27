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
    border: 1px solid red;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;
export default GlobalStyles;
