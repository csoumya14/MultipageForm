"use client";
import { Layout } from "@/containers/Layout/Layout";
import { useForm } from "react-hook-form";
import { StepInfoTypes, StepTitleTypes } from "@/enums/StepTitles";
import {
  StyledInput,
  StyledFieldset,
  StyledLegend,
  StyledForm,
  StyledFormContainer,
} from "./stepOne.style";
import { StepTitle } from "@/components/StepTitle/StepTitle";
import { useAppState } from "@/context";
import { Field } from "@/components/Forms/Field/Field";
import { PersonalInfoTypes } from "@/types/formInputDataTypes";
import { NavigationButtons } from "@/containers/NavigationButtons/NavigationButtons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { NavBar } from "@/containers/NavBar/NavBar";
import { useViewPort } from "@/hooks/customViewPort";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Valid email required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

export default function Home() {
  const { profile, setProfile } = useAppState();

  const [width] = useViewPort();
  const breakPoint = 500;

  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<PersonalInfoTypes>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

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
      <StyledForm>
        <StyledFormContainer>
          {width > breakPoint && <NavBar />}
          <div>
            <StepTitle title={StepTitleTypes.StepOne} />
            <StyledFieldset>
              <StyledLegend>{StepInfoTypes.StepOne}</StyledLegend>
              <Field id="name" label="Name" error={errors.firstName}>
                <StyledInput
                  error={errors.firstName}
                  {...register("firstName")}
                  type="name"
                  placeholder="e.g.Stephen King"
                  id="name"
                  defaultValue={profile.firstName}
                />
              </Field>

              <Field id="email" label="Email Address" error={errors.email}>
                <StyledInput
                  {...register("email")}
                  type="email"
                  error={errors.email}
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
                  {...register("phoneNumber")}
                  error={errors.phoneNumber}
                  type="tel"
                  placeholder="e.g. +1234567890"
                  id="phoneNumber"
                  defaultValue={profile.phoneNumber}
                />
              </Field>
            </StyledFieldset>
            {width > breakPoint && (
              <NavigationButtons
                back="/"
                handleForwardClick={handleForwardClick}
                handleBackwardClick={handleBackwardClick}
                home
                stepIsValidated={isValid}
              />
            )}
          </div>
        </StyledFormContainer>
        {width < breakPoint && (
          <NavigationButtons
            back="/"
            handleForwardClick={handleForwardClick}
            handleBackwardClick={handleBackwardClick}
            home
            stepIsValidated={isValid}
          />
        )}
      </StyledForm>
    </Layout>
  );
}
