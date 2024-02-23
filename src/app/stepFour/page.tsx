"use client";
import { Layout } from "@/components/Layout/Layout";
import { StepsLayout } from "@/components/StepsLayout/StepsLayout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { StyledFormContainer } from "@/styles/SharedStyles/SharedStyles";
import { AddOnTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/components/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import planOptions from "../../data/planOptions.json";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { addOnOptions } from "../stepThree/page";
import { planOptionsType } from "@/types/planOptionsTypes";

export interface addOnOptionsType {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  textDescription: string;
}

export default function StepFour() {
  const { plan, billingFrequency, addOn } = useAppState();
  const planName = plan.planName;
  console.log({planOptions})
  console.log("plan", plan);
  console.log("billingFrequency", billingFrequency);
  console.log("addOn", addOn);
  const selectedAddOns = addOn.map(addOnValues => {
    return addOnOptions.find(option => option.name === addOnValues);
  });

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
    router.push("/stepThree");
  };

  console.log("watchShowAddon", watchAddOn);

  return (
    <Layout>
      <StepsLayout>
        <StyledFormContainer>
          <StepTitle title={StepTitleTypes.StepFour} />
          <StepInfo info={StepInfoTypes.StepFour} />
          <ul>
            <li>
              {planName}
              {billingFrequency === ToggleLabelTypes.Monthly
                ? "(monthly)"
                : "(yearly)"}
              {billingFrequency === ToggleLabelTypes.Monthly
                ? `$ ${planOptions[planName as keyof planOptionsType].price.monthly}/ mo`
                : `$ ${planOptions[planName as keyof planOptionsType].price.yearly}/ yr`}
            </li>
            {selectedAddOns.map(selectedPlan => (
                <li key={selectedPlan?.name}>{selectedPlan?.name} {billingFrequency === ToggleLabelTypes.Monthly
                  ? `$ ${selectedPlan?.priceMonthly}/ mo`
                  : `$ ${selectedPlan?.priceYearly}/ yr`}</li>
            )) }
    
 
          </ul>
          <NavigationButtons
            back="/"
            next="/stepTwo"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            home
            stepIsValidated={isValid}
          />
        </StyledFormContainer>
      </StepsLayout>
    </Layout>
  );
}
