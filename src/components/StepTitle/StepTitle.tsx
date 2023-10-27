import { FC } from "react";
import { StyledHeading } from "./StepTitle.style";

interface StepTitleProps {
  title: string;
}

export const StepTitle: FC<StepTitleProps> = ({ title }) => {
  return <StyledHeading textLevel={"h2"}>{title}</StyledHeading>;
};
