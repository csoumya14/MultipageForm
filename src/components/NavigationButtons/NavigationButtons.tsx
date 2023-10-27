import Link from "next/link";
import { FC } from "react";
import { Wrapper } from "./NavigationButtons.style";
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
      <Link href={back}>
        <Button type="button">Back</Button>
      </Link>
      <Link href={next}>
        <button disabled={!stepIsValidated}>
          {home ? "Go Back" : "Next Step"}
        </button>
      </Link>
    </Wrapper>
  );
};
