import Link from "next/link";
import { FC } from "react";
import { Wrapper } from "./NavigationButtons.style";

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
        <button>Back</button>
      </Link>
      <Link href={next}>
        <button disabled={!stepIsValidated}>
          {home ? "Go Back" : "Next Step"}
        </button>
      </Link>
    </Wrapper>
  );
};
