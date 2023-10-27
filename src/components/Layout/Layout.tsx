"use client";
import { ReactNode } from "react";
import { Section } from "./Layout.style";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Section>{children}</Section>;
};
