
import { Input } from "@/components/Forms/Input/Input";
import styled from "styled-components";


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
