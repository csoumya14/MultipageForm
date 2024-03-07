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
  ErrorMessage,
} from "./thirdStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddOnTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { CheckBoxes } from "@/containers/CheckBoxes/CheckBoxes";
import { useViewPort } from "@/hooks/customViewPort";
import { NavBar } from "@/containers/NavBar/NavBar";
import { useAppState } from "@/context";

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
  const { addOn } = useAppState();
  const addOnLength = addOn.length;

  const {
    control,
    formState: { errors },
  } = useForm<AddOnTypes>({
    mode: "onChange",
  });

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
                error={errors.addOn && errors.addOn[0]}
              />
              {addOnLength === 0 && (
                <ErrorMessage>Please select an add on</ErrorMessage>
              )}
            </StyledFieldset>
            {width > breakPoint && (
              <NavigationButtons
                back="/"
                stepIsValidated={addOnLength !== 0}
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
            stepIsValidated={addOnLength !== 0}
          />
        )}
      </StyledForm>
    </Layout>
  );
}
