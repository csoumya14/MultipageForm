import styled from "styled-components";

export const StyledOptionPrice = styled.span<{ plan: boolean }>`
  color: ${(props) => props.theme.palette.primary.grey};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    text-align: ${(props) => (props.plan ? "center" : "lefts")};
  }
`;
