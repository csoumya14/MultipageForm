import styled from "styled-components";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;

export const NextButtonLink = styled(Link)`
  margin-left: auto;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
`;
