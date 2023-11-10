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
} from "./secondStep.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import { useAppState } from "@/context";
import { Field } from "@/components/Forms/Field/Field";
import { SetStateAction } from "react";
import { formInputDataTypes } from "@/types/formInputDataTypes";
import { SvgArcade } from "@/components/SVGs/SvgArcade/SvgArcade";
import { SvgAdvanced } from "@/components/SVGs/SvgAdvanced/SvgAdvanced";
import { SvgPro } from "@/components/SVGs/SvgPro/SvgPro";

export default function Home() {
  const { setFormValues, data } = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (values: SetStateAction<formInputDataTypes>) => {
    setFormValues(values);
  };
  const isMonthly = true;
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
                  <span>{option.name}</span>
                  <span>
                    ${option.priceMonthly}/{isMonthly ? "mo" : "yr"}
                  </span>
                </StyledLabel>
              </StyledOptionWrapper>
            ))}
          </StyledFieldset>
        </form>
      </StepsLayout>
    </Layout>
  );
}
