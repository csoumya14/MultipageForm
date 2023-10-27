import React from "react";
import { FC } from "react";

interface StepTitleProps {
  active: boolean;
  title: string;
}

export const StepTitle: FC<StepTitleProps> = ({ active, title }) => {
  return <h2>{title}</h2>;
};
