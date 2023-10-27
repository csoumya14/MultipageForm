"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { theme } from "@/styles/theme/ThemeVariable";
import GlobalStyles from "@/styles/GlobalStyles";
import { Main } from "./Providers.style";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>{props.children}</Main>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
