import Link from "next/link";
import styled from "styled-components";

export const StyledList = styled.li`
  list-style-type: none;
`;
export const StyledLink = styled(Link)`
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
