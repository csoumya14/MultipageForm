"use client";
import { ReactNode } from "react";
import { Section, Article, Container } from "./Layout.style";
import { NavBar } from "@/containers/NavBar/NavBar";
import { useViewPort } from "@/hooks/customViewPort";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [width] = useViewPort();
  const breakPoint = 500;
  return (
    <>
      <Section>
        {width < breakPoint ? (
          <Container>
            <NavBar />
            <Article>{children}</Article>
          </Container>
        ) : (
          <Container>
            <Article> {children}</Article>
          </Container>
        )}
      </Section>
    </>
  );
};
