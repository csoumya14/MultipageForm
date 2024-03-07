import React, { FC } from "react";
import { Container } from "./Button.style";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  type: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
  form?:string;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary",
  className,
  form,
  disabled,
  type,
}) => {
  return (
    <Container
      type={type}
      form={form}
      className={className}
      onClick={onClick}
      color={disabled ? "secondary" : "primary"}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};