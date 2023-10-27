"use client";
import { Layout } from "@/components/Layout/Layout";
import { StepsLayout } from "@/components/StepsLayout/StepsLayout";
import { Step } from "@/components/Step/Step";
import { useForm } from "react-hook-form";
import { Banner } from "@/components/Banner/Banner";
import { NavigationButtons } from "@/components/NavigationButtons/NavigationButtons";

export default function Home() {
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  const handleRegistration = (data: any) => console.log(data);
  return (
    <Layout>
      <StepsLayout back="/" next="/step-two">
        <Banner textLevel={"h2"}>Personal info</Banner>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <input {...register("name")} type="text" placeholder="First name" />
          <input {...register("email")} type="text" placeholder="Email" />
          <input
            {...register("phoneNumber")}
            type="text"
            placeholder="Phone number"
          />
        </form>
      </StepsLayout>
    </Layout>
  );
}

/*  */
