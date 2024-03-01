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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledOptionWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  border: solid;
  border-width: ${(props) => (props.selected ? "2px" : "1px")};
  border-color: ${(props) => (props.selected ? "#483EFF" : "#9699AA")};
  border-radius: 6px;
  padding: 1rem;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding: 1rem 1rem;
    width: 7rem;
    height: 10rem;
    flex-direction: column;
  }
`;

export const StyledOptionName = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.palette.primary.denim};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    text-align: center;
  }
`;
export const StyledFreeMessage = styled.span`
  color: ${(props) => props.theme.palette.primary.denim};
  font-size: 12px;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    text-align: center;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
