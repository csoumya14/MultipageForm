"use client";
import { Layout } from "@/components/Layout/Layout";
import { StepsLayout } from "@/components/StepsLayout/StepsLayout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledInput,
  StyledFieldset,
  StyledOptionWrapper,
  StyledLabel,
  StyledForm,
  StyledToggleSwitchWrapper,
  StyledOptionName,
  StyledOptionPrice,
  StyledFreeMessage,
  StyledLegend,
} from "./secondStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import { useAppState } from "@/context";
import { IndividualPlanTypes } from "@/types/formInputDataTypes";
import { SvgArcade } from "@/components/SVGs/SvgArcade/SvgArcade";
import { SvgAdvanced } from "@/components/SVGs/SvgAdvanced/SvgAdvanced";
import { SvgPro } from "@/components/SVGs/SvgPro/SvgPro";
import { ToggleSwitch } from "@/components/ToggleSwitch/ToggleSwitch";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { NavigationButtons } from "@/components/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";
import {
  
  StyledFormContainer,
} from "@/styles/SharedStyles/SharedStyles";

export default function Home() {
  const { plan, billingFrequency, setSelectedBillingFrequency, setPlan } =
    useAppState();

  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<IndividualPlanTypes>({ mode: "onChange" });
  console.log("plan selected", plan);
  const router = useRouter();
  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    const values = getValues();
    setPlan(values);
    router.push("/stepThree");
  };

  const watchPlan = watch("planName", "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("planName", e.target.value);
  };

  const planOptions = [
    {
      id: "1Arcade",
      name: "Arcade",
      priceMonthly: "9",
      priceYearly: "90",
      icon: <SvgArcade />,
    },
    {
      id: "2Advanced",
      name: "Advanced",
      priceMonthly: "12",
      priceYearly: "120",
      icon: <SvgAdvanced />,
    },
    {
      id: "3Pro",
      name: "Pro",
      priceMonthly: "15",
      priceYearly: "150",
      icon: <SvgPro />,
    },
  ];
  return (
    <Layout>
      <StepsLayout>
        <StyledForm>
          <StyledFormContainer>
            <StepTitle title={StepTitleTypes.StepTwo} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepTwo}</StyledLegend>
              {planOptions?.map((option) => (
                <StyledOptionWrapper
                  key={option.id}
                  selected={
                    watchPlan
                      ? watchPlan === option.name
                      : plan.planName === option.name
                  }
                >
                  {option.icon}
                  <StyledLabel htmlFor={option.id}>
                    <StyledInput
                      {...register("planName")}
                      type="radio"
                      id={option.id}
                      onChange={handleChange}
                      value={option.name}
                      defaultValue={plan.planName}
                      name="planOptions"
                    />
                    <StyledOptionName>{option.name}</StyledOptionName>
                    <StyledOptionPrice>
                      {billingFrequency === ToggleLabelTypes.Monthly
                        ? `$ ${option.priceMonthly}/ mo`
                        : `$ ${option.priceYearly}/ yr`}
                    </StyledOptionPrice>
                    <StyledFreeMessage>
                      {billingFrequency === ToggleLabelTypes.Yearly
                        ? "2 months free"
                        : ""}
                    </StyledFreeMessage>
                  </StyledLabel>
                </StyledOptionWrapper>
              ))}
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
      </StepsLayout>
    </Layout>
  );
}
