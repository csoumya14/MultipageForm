import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: column;
    padding: 1rem 5rem 1rem 1rem;
  }
`;
