import Link from "next/link";
import { FC } from "react";
import {
  NextButtonLink,
  StyledButton,
  Wrapper,
} from "./NavigationButtons.style";
import { Button } from "../Button/Button";

type NavigationButtonsProps = {
  back: string;
  next: string;
  home?: boolean;
  stepIsValidated?: boolean;
};

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  back,
  next,
  home,
  stepIsValidated = true,
}) => {
  return (
    <Wrapper>
      {!home && (
        <Link href={back}>
          <Button type="button"> Go Back</Button>
        </Link>
      )}
      <NextButtonLink href={next}>
        <StyledButton type="button" disabled={!stepIsValidated}>
          Next Step
        </StyledButton>
      </NextButtonLink>
    </Wrapper>
  );
};
