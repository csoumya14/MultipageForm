import { Banner } from "@/components/Banner/Banner";
import { Input } from "@/components/Forms/Input/Input";
import styled from "styled-components";

export const StyledHeading = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.denim};
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

export const StyledFormContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0 2rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-height: 100vh;
  width: 100vw;
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;
