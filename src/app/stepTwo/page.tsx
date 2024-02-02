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
  StyledToggleSwitchWrapper,
  StyledOptionName,
  StyledOptionPrice,
  StyledFreeMessage,
} from "./secondStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import { useAppState } from "@/context";
import { SetStateAction, useState } from "react";
import { formInputDataTypes } from "@/types/formInputDataTypes";
import { SvgArcade } from "@/components/SVGs/SvgArcade/SvgArcade";
import { SvgAdvanced } from "@/components/SVGs/SvgAdvanced/SvgAdvanced";
import { SvgPro } from "@/components/SVGs/SvgPro/SvgPro";
import { ToggleSwitch } from "@/components/ToggleSwitch/ToggleSwitch";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";

export default function Home() {
  const { setFormValues, data } = useAppState();
  const [billingFrequency, setSelectedBillingFrequency] =
    useState<string>("Yearly");
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (values: SetStateAction<formInputDataTypes>) => {
    setFormValues(values);
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
      <StepsLayout back="/" next="/stepThree">
        <StepTitle title={StepTitleTypes.StepTwo} />
        <StepInfo info={StepInfoTypes.StepTwo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFieldset>
            {planOptions?.map((option) => (
              <StyledOptionWrapper key={option.id}>
                {option.icon}
                <StyledLabel>
                  <StyledInput type="radio" id={option.id} name={option.name} />
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
              <ToggleSwitch
                billingFrequency={billingFrequency}
                setSelectedBillingFrequency={setSelectedBillingFrequency}
              />
            </StyledToggleSwitchWrapper>
          </StyledFieldset>
        </form>
      </StepsLayout>
    </Layout>
  );
}
