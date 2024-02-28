"use client";
import { Layout } from "@/containers/Layout/Layout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { AddOnTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import { Summary } from "@/containers/Summary/Summary";
import { useState } from "react";
import { ThankYouMessage } from "@/containers/ThankYouMessage/ThankYouMessage";
import { StyledFormContainer } from "./fourthStep.style";

export interface addOnOptionsType {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  textDescription: string;
}

export default function StepFour() {
  const { addOn } = useAppState();
  const [confirm, setConfirm] = useState<boolean>(false);

  console.log({ addOn });

  const {
    watch,
    formState: { errors, isValid },
  } = useForm<AddOnTypes>({ mode: "onChange" });

  const watchAddOn = watch("addOn", []);

  const router = useRouter();
  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    router.push("/stepThree");
  };

  const handleConfirmClick = () => {
    setConfirm(true);
  };

  console.log("watchShowAddon", watchAddOn);

  return (
    <Layout>
      {confirm ? (
        <StyledFormContainer>
          <ThankYouMessage />
        </StyledFormContainer>
      ) : (
        <>
          <StyledFormContainer>
            <StepTitle title={StepTitleTypes.StepFour} />
            <StepInfo info={StepInfoTypes.StepFour} />
            <Summary />
          </StyledFormContainer>
          <NavigationButtons
            back="/stepThree"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            handleConfirmClick={handleConfirmClick}
            summary
            stepIsValidated={isValid}
          />{" "}
        </>
      )}
    </Layout>
  );
}
