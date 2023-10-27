import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  textLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

export const Banner = ({ textLevel = "p", children, className }: TextProps) => {
  const BannerText = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(textLevel, props, children);

  return <BannerText className={className}>{children}</BannerText>;
};
