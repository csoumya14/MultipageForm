import { FC } from "react";
import {
  StyledBackButton,
  StyledNextButton,
  Wrapper,
} from "./NavigationButtons.style";

type NavigationButtonsProps = {
  back: string;
  next?: string;
  home?: boolean;
  summary?: boolean;
  type?: string;
  stepIsValidated?: boolean;
  handleForwardClick: () => void;
  handleBackwardClick: () => void;
};

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  handleBackwardClick,
  handleForwardClick,
  home,
  summary,
  type = "button",
  stepIsValidated,
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
        <StyledNextButton type={type} disabled={!stepIsValidated}>
          confirm
        </StyledNextButton>
      )}
    </Wrapper>
  );
};
