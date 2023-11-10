import React, {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  forwardRef,
} from "react";

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  checked?: boolean;
  className?: string;
  placeholder?: string;
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type, placeholder, className, ...props }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        className={className}
        type={type}
        aria-label={id}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
