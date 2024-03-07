import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
const COLOR = {
  primary: css`
    color: ${(props) => props.theme.palette.neutral.white};
    background: ${(props) => props.theme.palette.primary.denim};
    border: none;
  `,
  secondary: css`
    color: ${(props) => props.theme.palette.neutral.white};
    background: ${(props) => props.theme.palette.primary.lightBlue};
  `,
};

export const Container = styled.button<ButtonProps>`
  border-radius: 5px;
  cursor:pointer;
  ${(props) => props.color && COLOR[props.color]}
`;
