import React, { FC } from "react";
import { Container } from "./Button.style";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  type: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary",
  className,
  disabled,
  type,
}) => {
  return (
    <Container
      type={type}
      className={className}
      onClick={onClick}
      color={color}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};