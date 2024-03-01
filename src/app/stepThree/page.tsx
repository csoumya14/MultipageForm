"use client";
import { Layout } from "@/containers/Layout/Layout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledFieldset,
  StyledForm,
  StyledLegend,
  StyledFormContainer,
  StyledWrapper,
} from "./thirdStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { AddOnTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { CheckBoxes } from "@/containers/CheckBoxes/CheckBoxes";
import { useViewPort } from "@/hooks/customViewPort";
import { NavBar } from "@/containers/NavBar/NavBar";

export interface addOnOptionsType {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  textDescription: string;
}

export default function StepThree() {
  const [width] = useViewPort();
  const breakPoint = 500;

  const { control, watch } = useForm<AddOnTypes>({ mode: "onChange" });

  const watchAddOn = watch("addOn", []);

  const router = useRouter();
  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    router.push("/stepFour");
  };

  return (
    <Layout>
      <StyledForm>
        <StyledFormContainer>
          {width > breakPoint && <NavBar />}
          <StyledWrapper>
            <StepTitle title={StepTitleTypes.StepThree} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepThree}</StyledLegend>
              <CheckBoxes
                name="addOn"
                control={control}
                watchAddOn={watchAddOn}
              />
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
