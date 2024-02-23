import styled from "styled-components";

export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;
