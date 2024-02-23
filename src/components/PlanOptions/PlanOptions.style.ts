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


export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;




