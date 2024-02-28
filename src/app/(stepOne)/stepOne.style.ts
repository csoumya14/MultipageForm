import { Input } from "@/components/Forms/Input/Input";
import styled from "styled-components";

export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    padding: 3rem;
    width: fit-content;
  }
`;

export const StyledInput = styled(Input)`
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.borderColor};
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  max-height: 100vh;
  width: 100vw;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: center;
  }
`;
