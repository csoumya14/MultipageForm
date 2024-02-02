import { Banner } from "@/components/Banner/Banner";
import { Input } from "@/components/Forms/Input/Input";
import styled from "styled-components";

export const StyledHeading = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledInput = styled(Input)`
  opacity: 0;
  position: absolute;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
`;

export const StyledOptionWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.grey};
  border-radius: 6px;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;

export const StyledOptionName = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.denim};
`;
export const StyledFreeMessage = styled.span`
  height: 1rem;
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledOptionPrice = styled.span`
  color: ${(props) => props.theme.palette.primary.grey};
`;

export const StyledToggleSwitchWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.veryLightGrey};
  border-radius: 6px;
  align-items: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
