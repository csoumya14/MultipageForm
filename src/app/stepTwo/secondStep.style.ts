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

export const StyledOptionWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  border: solid;
  border-width: ${(props) => (props.selected ? "2px" : "1px")};
  border-color: ${(props) => (props.selected ? "#483EFF" : "#9699AA")};
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
  gap: 0.3rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  
  max-height: 100vh;
  width: 100vw;
`;




export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;
