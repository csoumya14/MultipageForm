"use client";
import { Layout } from "@/components/Layout/Layout";
import { StepsLayout } from "@/components/StepsLayout/StepsLayout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledInput,
  StyledFieldset,
  StyledFormContainer,
  StyledForm,
  StyledLegend,
} from "./stepOne.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { Field } from "@/components/Forms/Field/Field";
import { PersonalInfoTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/components/NavigationButtons/NavigationButtons";
import { useRouter } from "next/navigation";

const PHONE_NO_REGEX = /^[0-9\- ]{8,14}$/;
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Home() {
  const { profile, setProfile } = useAppState();

  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<PersonalInfoTypes>({
    mode: "onChange",
  });

  console.log("name", profile.firstName);
  const router = useRouter();

  const handleBackwardClick = () => {
    router.back();
  };
  const handleForwardClick = () => {
    const values = getValues();
    setProfile(values);
    console.log("data: from profile form", values);
    router.push("/stepTwo");
  };

  return (
    <Layout>
      <StepsLayout>
        {/* <StepInfo info={StepInfoTypes.StepOne} /> */}
        <StyledForm>
          <StyledFormContainer>
            <StepTitle title={StepTitleTypes.StepOne} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepOne}</StyledLegend>
              <Field id="name" label="Name" error={errors.firstName}>
                <StyledInput
                  {...register("firstName", {
                    required: { value: true, message: "Name is required" },
                    maxLength: {
                      value: 20,
                      message: "min length should be 20",
                    },
                  })}
                  type="name"
                  placeholder="e.g.Stephen King"
                  id="name"
                  defaultValue={profile.firstName}
                />
              </Field>
              <Field id="email" label="Email Address" error={errors.email}>
                <StyledInput
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: { value: EMAIL_REGEX, message: "incorrect email" },
                  })}
                  type="email"
                  placeholder="e.g.stephenking@lorem.com"
                  id="email"
                  defaultValue={profile.email}
                />
              </Field>
              <Field
                id="phoneNumber"
                label="Phone Number"
                error={errors.phoneNumber}
              >
                <StyledInput
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                  type="tel"
                  placeholder="e.g. +1234567890"
                  id="phoneNumber"
                  defaultValue={profile.phoneNumber}
                />
              </Field>
            </StyledFieldset>
          </StyledFormContainer>
          <NavigationButtons
            back="/"
            next="/stepTwo"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            home
            stepIsValidated={isValid}
          />
        </StyledForm>
      </StepsLayout>
    </Layout>
  );
}
