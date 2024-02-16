"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/styles/theme/ThemeVariable";
import GlobalStyles from "@/styles/GlobalStyles";
import { Main } from "./Providers.style";
import { AppProvider } from "@/context";
import { DefaultValues, FormProvider, useForm } from "react-hook-form";
import { formInputDataTypes } from "@/types/formInputDataTypes";
import { NavBar } from "@/components/NavBar/NavBar";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <GlobalStyles />
          <Main>{props.children}</Main>
        </AppProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
