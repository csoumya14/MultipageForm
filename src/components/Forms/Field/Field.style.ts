import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
