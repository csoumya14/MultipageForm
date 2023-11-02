import React, { FC, ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { StyledLabel, StyledFieldWrapper } from "./Field.style";

interface FieldProps {
  children?: ReactNode;
  id: string;
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const Field: FC<FieldProps> = ({ children, label, error, id }) => {
  return (
    <StyledFieldWrapper>
      <StyledLabel htmlFor={id} className="form-label">
        {label}
      </StyledLabel>
      {children}
      {error && <small className="error">{error.message?.toString()}</small>}
    </StyledFieldWrapper>
  );
};
