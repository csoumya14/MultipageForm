"use client";
import { Layout } from "@/components/Layout/Layout";
import { StepsLayout } from "@/components/StepsLayout/StepsLayout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import { StyledInput, StyledFieldset } from "./stepOne.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { StepInfo } from "@/components/StepInfo/StepInfo";
import { useAppState } from "@/context";
import { Field } from "@/components/Forms/Field/Field";
import { SetStateAction } from "react";
import { formInputDataTypes } from "@/types/formInputDataTypes";

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
  return (
    <Layout>
      <StepsLayout back="/" next="/step-two" home>
        <StepTitle title={StepTitleTypes.StepOne} />
        <StepInfo info={StepInfoTypes.StepOne} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledFieldset>
            <Field id="name" label="Name">
              <StyledInput
                {...register("name")}
                type="text"
                placeholder="e.g.Stephen King"
                id="name"
              />
            </Field>

            <Field id="email" label="Email Address">
              <StyledInput
                {...register("email")}
                type="text"
                placeholder="e.g.stephenking@lorem.com"
                id="email"
              />
            </Field>
            <Field id="phoneNumber" label="Phone Number">
              <StyledInput
                {...register("phoneNumber")}
                type="text"
                placeholder="e.g. +1234567890"
                id="phoneNumber"
              />
            </Field>
          </StyledFieldset>
        </form>
      </StepsLayout>
    </Layout>
  );
}
