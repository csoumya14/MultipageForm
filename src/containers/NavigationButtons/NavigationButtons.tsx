import { FC } from "react";
import {
  StyledBackButton,
  StyledConfirmButton,
  StyledNextButton,
  Wrapper,
} from "./NavigationButtons.style";

type NavigationButtonsProps = {
  back: string;
  home?: boolean;
  summary?: boolean;
  type?: string;
  stepIsValidated?: boolean;
  handleForwardClick: () => void;
  handleBackwardClick: () => void;
  handleConfirmClick?: () => void;
};

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  handleBackwardClick,
  handleForwardClick,
  handleConfirmClick,
  home,
  summary,
  type = "button",
  stepIsValidated = true,
}) => {
  return (
    <Wrapper>
      {!home && (
        <StyledBackButton type="button" onClick={handleBackwardClick}>
          {" "}
          Go Back
        </StyledBackButton>
      )}
      {!summary ? (
        <StyledNextButton
          type={type}
          disabled={!stepIsValidated}
          onClick={handleForwardClick}
        >
          Next Step
        </StyledNextButton>
      ) : (
        <StyledConfirmButton
          type={type}
          disabled={!stepIsValidated}
          onClick={handleConfirmClick}
        >
          confirm
        </StyledConfirmButton>
      )}
    </Wrapper>
  );
};
