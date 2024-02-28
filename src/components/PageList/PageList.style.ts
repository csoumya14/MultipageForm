import styled from "styled-components";

export const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;
export const StyledStepNumber = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
  }
`;

export const StyledStep = styled.span`
  color: ${(props) => props.theme.palette.primary.lightBlue};
`;

export const StyledInfo = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.palette.neutral.white};
`;
export const StyledLink = styled.div`
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.neutral.white};
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${(props) => props.theme.palette.primary.skyBlue};
  }
  color: ${(props) => props.theme.palette.neutral.white};
  &[aria-current="page"] {
    background: ${(props) => props.theme.palette.primary.skyBlue};
    color: ${(props) => props.theme.palette.primary.denim};
  }
`;
