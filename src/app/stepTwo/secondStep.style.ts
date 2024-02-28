import { Banner } from "@/components/Banner/Banner";
import styled from "styled-components";

export const StyledHeading = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: none;
`;

export const StyledToggleSwitchWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.palette.primary.veryLightGrey};
  border-radius: 6px;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100vw;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: center;
  }
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  line-height: ${(props) => props.theme.lineHeight.bodyLargeScreen}px;
`;

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
    gap: 1rem;
    width: fit-content;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
