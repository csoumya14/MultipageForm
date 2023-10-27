import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { StepTitle } from "./StepTitle/StepTitle";
import { NavBar } from "../NavBar/NavBar";
import { Article, Wrapper } from "./StepsLayout.style";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

type StepsLayoutProps = {
  children: ReactNode;
  back: string;
  next: string;
  home?: boolean;
};

export const StepsLayout: FC<StepsLayoutProps> = ({
  children,
  back,
  next,
  home,
}) => {
  const pathname = usePathname();
  const activeOne = pathname === "/step-one";
  const activeTwo = pathname === "/step-two";
  const activeThree = pathname === "/step-three";
  const activeAnswers = pathname === "/step-four";

  return (
    <Article>
      <NavBar />
      <Wrapper>{children}</Wrapper>
      <NavigationButtons back={back} home={home} next={next} />
    </Article>
  );
};
