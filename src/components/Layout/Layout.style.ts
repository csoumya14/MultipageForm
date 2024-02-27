import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  position: absolute;
  top: 7rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.primary.background};
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;
