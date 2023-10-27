import { FC, ReactNode } from "react";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

interface StepProps {
  children: ReactNode;
  back: string;
  next: string;
  home?: boolean;
}

export const Step: FC<StepProps> = ({ children, back, next, home }) => {
  return <>{children}</>;
};
