"use client";
import { ReactNode } from "react";
import { Section, Article } from "./Layout.style";
import { NavBar } from "@/containers/NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Section>
        <Article>{children}</Article>
      </Section>
    </>
  );
};
