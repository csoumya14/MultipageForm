import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
`;

export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 2rem;
  max-height: 100vh;
  width: 100vw;
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;
