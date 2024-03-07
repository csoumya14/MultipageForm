"use client";
import { Layout } from "@/containers/Layout/Layout";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledFieldset,
  StyledForm,
  StyledToggleSwitchWrapper,
  StyledLegend,
  StyledFormContainer,
  StyledWrapper,
} from "./secondStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { ToggleSwitch } from "@/components/ToggleSwitch/ToggleSwitch";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { PlanOptions } from "@/containers/PlanOptions/PlanOptions";
import { NavBar } from "@/containers/NavBar/NavBar";
import { useViewPort } from "@/hooks/customViewPort";

export default function Home() {
  const [width] = useViewPort();
  const breakPoint = 500;

  const router = useRouter();
  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    router.push("/stepThree");
  };

  return (
    <Layout>
      <StyledForm>
        <StyledFormContainer>
          {width > breakPoint && <NavBar />}
          <StyledWrapper>
            <StepTitle title={StepTitleTypes.StepTwo} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepTwo}</StyledLegend>
              <PlanOptions />
              <StyledToggleSwitchWrapper>
                <ToggleSwitch />
              </StyledToggleSwitchWrapper>
            </StyledFieldset>
            {width > breakPoint && (
              <NavigationButtons
                back="/"
                handleForwardClick={handleForwardClick}
                handleBackwardClick={handleBackwardClick}
              />
            )}
          </StyledWrapper>
        </StyledFormContainer>
        {width < breakPoint && (
          <NavigationButtons
            back="/"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
          />
        )}
      </StyledForm>
    </Layout>
  );
}
