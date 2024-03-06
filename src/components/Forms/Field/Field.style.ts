import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ErrorMessage = styled.small`
  color: ${(props) => props.theme.palette.primary.redErrors};
  align-self: flex-start;
  width: 50%;
`;
