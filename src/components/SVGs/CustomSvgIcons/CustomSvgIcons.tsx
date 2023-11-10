import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  SVGAttributes,
} from "react";

export type SvgIconProps = (
  | {
      "aria-label": string;
      "aria-labelledby"?: never;
      "aria-hidden"?: never | false;
    }
  | {
      "aria-label"?: never;
      "aria-labelledby": string;
      "aria-hidden"?: never | false;
    }
  | {
      "aria-label"?: never;
      "aria-labelledby"?: never;
      "aria-hidden"?: true;
    }
) &
  Omit<
    SVGAttributes<SVGAElement> & HTMLAttributes<SVGElement>,
    "aria-label" | "aria-labelledby"
  >;

export const CustomSvgIcon: FC<PropsWithChildren<SvgIconProps>> = ({
  xmlns = "http://www.w3.org/2000/svg",
  viewBox = "0 0 16 16",
  children,
  ...props
}) => (
  <svg xmlns={xmlns} viewBox={viewBox} {...props}>
    {children}
  </svg>
);
