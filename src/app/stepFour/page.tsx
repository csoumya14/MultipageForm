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
import addOnOptions from "../../data/addOnInfo.json";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { planOptionsType } from "@/types/planOptionsTypes";
import { addOnInfoType } from "@/types/addOnInfoTypes";
import { Summary } from "@/components/Summary/Summary";

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
  console.log({ planOptions });

  console.log({ addOn });

  const selectedAddOns = Object.entries(addOnOptions).map(
    ([addOnType, addOnInfo]) => {
      return addOn.find((item) => addOnInfo.title === item);
    }
  );
  console.log("selected", selectedAddOns);
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
          <Summary/>
          <NavigationButtons
            back="/stepThree"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            summary
            stepIsValidated={isValid}
          />
        </StyledFormContainer>
      </StepsLayout>
    </Layout>
  );
}
