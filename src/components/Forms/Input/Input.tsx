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
  value?:string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  checked?: boolean;
  className?: string;
  placeholder?: string;
  defaultChecked?:boolean;
  onChange?: React.ChangeEventHandler;
  defaultValue?:string;
};

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      type,
      placeholder,
      onChange,
      defaultChecked,
      className,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        className={className}
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        value={value}
        onChange={onChange}
        type={type}
        aria-label={id}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
