import { FC } from "react";
import { ThankYouTypes } from "@/enums/ThankYou";
import { ThankYouIcon } from "@/components/SVGs/ThankYouIcon/ThankYouIcon";
import {
  ThankyouMessage,
  Wrapper,
  StyledThanks,
} from "./ThankYouMessage.style";

interface ThankYouMessageTypes {}

export const ThankYouMessage: FC<ThankYouMessageTypes> = ({}) => {
  return (
    <Wrapper>
      <ThankYouIcon />
      <StyledThanks textLevel={"h2"}>Thank you</StyledThanks>
      <ThankyouMessage textLevel="p">{ThankYouTypes.Message}</ThankyouMessage>
    </Wrapper>
  );
};
