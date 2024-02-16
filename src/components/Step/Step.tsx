import { FC, ReactNode } from "react";

interface StepProps {
  children: ReactNode;
  back: string;
  next: string;
  home?: boolean;
}

export const Step: FC<StepProps> = ({ children, back, next, home }) => {
  return <>{children}</>;
};
