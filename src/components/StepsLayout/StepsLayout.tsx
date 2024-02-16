import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { StepTitle } from "./StepTitle/StepTitle";
import { NavBar } from "../NavBar/NavBar";
import { Article, Wrapper } from "./StepsLayout.style";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";
import { SubmitHandler } from "react-hook-form";
import { PersonalInfoTypes } from "@/types/formInputDataTypes";

type StepsLayoutProps = {
  children: ReactNode;
};

export const StepsLayout: FC<StepsLayoutProps> = ({ children }) => {
  return (
    <Article>
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </Article>
  );
};
