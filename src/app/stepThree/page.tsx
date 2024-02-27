"use client";
import { Layout } from "@/components/Layout/Layout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledFieldset,
  StyledForm,
  StyledLegend,
  StyledFormContainer,
} from "./thirdStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { AddOnTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { CheckBoxes } from "@/containers/CheckBoxes/CheckBoxes";

export interface addOnOptionsType {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  textDescription: string;
}

export const addOnOptions: addOnOptionsType[] = [
  {
    id: "1OnlineService",
    name: "Online Service",
    priceMonthly: "1",
    priceYearly: "10",
    textDescription: "Access to multiplayer games",
  },
  {
    id: "3LargerStorage",
    name: "Larger storage",
    priceMonthly: "2",
    priceYearly: "20",
    textDescription: "Extra 1TB of cloud save",
  },
  {
    id: "3CustomizableProfile",
    name: "Customizable profile",
    priceMonthly: "2",
    priceYearly: "20",
    textDescription: "Custom theme on your profile",
  },
];

export default function StepThree() {
  const { addOn } = useAppState();

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<AddOnTypes>({ mode: "onChange" });

  const watchAddOn = watch("addOn", []);

  const router = useRouter();
  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    router.push("/stepFour");
  };

  console.log("watchShowAddon", watchAddOn);

  return (
    <Layout>
      <StyledForm>
        <StyledFormContainer>
          <StepTitle title={StepTitleTypes.StepThree} />
          <StyledFieldset>
            <StyledLegend>{StepInfoTypes.StepThree}</StyledLegend>
            <CheckBoxes
              name="addOn"
              control={control}
              watchAddOn={watchAddOn}
            />
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
