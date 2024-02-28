import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.background};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: center;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
