"use client";
import { Layout } from "@/components/Layout/Layout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledFieldset,
  StyledForm,
  StyledToggleSwitchWrapper,
  StyledLegend,
  StyledFormContainer,
} from "./secondStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { IndividualPlanTypes } from "@/types/formInputDataTypes";
import { ToggleSwitch } from "@/components/ToggleSwitch/ToggleSwitch";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";

import { PlanOptions } from "@/containers/PlanOptions/PlanOptions";

export default function Home() {
  const { plan, setPlan } = useAppState();

  const {
    getValues,
    formState: { errors, isValid },
  } = useForm<IndividualPlanTypes>({ mode: "onChange" });
  console.log("plan selected", plan);
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
            <StepTitle title={StepTitleTypes.StepTwo} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepTwo}</StyledLegend>
              <PlanOptions />
              <StyledToggleSwitchWrapper>
                <ToggleSwitch />
              </StyledToggleSwitchWrapper>
            </StyledFieldset>
          </StyledFormContainer>
          <NavigationButtons
            back="/"
            next="/stepThree"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            stepIsValidated={isValid}
          />
        </StyledForm>  
    </Layout>
  );
}
