import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-height: 100vh;
  width: 100vw;
`;


export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;