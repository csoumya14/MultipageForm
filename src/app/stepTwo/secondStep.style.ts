import styled from "styled-components";

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
  max-height: 100vh;
  width: 100vw;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: center;
  }
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.grey};
  padding-bottom: 1rem;
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
    width: ${(props) => props.theme.card.bigScreen.width};
    min-height: ${(props) => props.theme.card.bigScreen.height};
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
