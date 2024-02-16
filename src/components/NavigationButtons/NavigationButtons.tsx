import Link from "next/link";
import { FC, isValidElement } from "react";
import {
  StyledBackButton,
  StyledNextButton,
  Wrapper,
} from "./NavigationButtons.style";

import { useRouter } from "next/navigation";

type NavigationButtonsProps = {
  back: string;
  next: string;
  home?: boolean;
  type?:string;
  stepIsValidated?: boolean;
  handleForwardClick: () => void;
  handleBackwardClick: () => void;
};

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  handleBackwardClick,
  handleForwardClick,
  home,
  type="button",
  stepIsValidated,
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      {!home && (
        <StyledBackButton type="button" onClick={handleBackwardClick}>
          {" "}
          Go Back
        </StyledBackButton>
      )}

      <StyledNextButton
        type={type}
        disabled={!stepIsValidated}
        onClick={handleForwardClick}
      >
        Next Step
      </StyledNextButton>
    </Wrapper>
  );
};
