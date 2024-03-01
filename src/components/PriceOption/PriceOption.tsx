"use client";
import { StyledOptionPrice } from "./PriceOption.style";
import { useAppState } from "@/context";

import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { FC } from "react";

interface PriceOptionsTypes {
  monthlyPrice: number;
  yearlyPrice: number;
  plan?:boolean;
}

export const PriceOption: FC<PriceOptionsTypes> = ({
  monthlyPrice,
  yearlyPrice,
  plan =false,
}) => {
  const { billingFrequency } = useAppState();
  return (
    <StyledOptionPrice plan={plan}>
      {billingFrequency === ToggleLabelTypes.Monthly
        ? `$ ${monthlyPrice}/ mo`
        : `$ ${yearlyPrice}/ yr`}
    </StyledOptionPrice>
  );
};
