import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import Link from "next/link";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.neutral.white};
`;

export const NextButtonLink = styled(Link)`
  margin-left: auto;
`;

export const StyledNextButton = styled(Button)`
  padding: 1rem;
  margin-left: auto;
`;

export const StyledBackButton = styled(Button)`
  padding: 1rem;
  background: transparent;
  color: ${(props) => props.theme.palette.primary.denim};
`;

export const StyledConfirmButton = styled(Button)`
  padding: 1rem;
  background: ${(props) => props.theme.palette.primary.purple};
  color: ${(props) => props.theme.palette.neutral.white};
`;
