import styled from "styled-components";
export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    width: ${(props) => props.theme.card.bigScreen.width};
  }
`;
