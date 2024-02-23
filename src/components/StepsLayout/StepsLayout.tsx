import { FC, ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Article, Wrapper } from "./StepsLayout.style";

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
