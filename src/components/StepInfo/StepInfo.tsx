import { FC } from "react";
import { StyledPara } from "./StepInfo.style";

interface StepInfoProps {
  info: string;
}

export const StepInfo: FC<StepInfoProps> = ({ info }) => {
  return <StyledPara textLevel={"p"}>{info}</StyledPara>;
};
