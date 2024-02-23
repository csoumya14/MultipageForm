"use client";
import { StyledOptionPrice } from "./PriceOption.style";
import { useAppState } from "@/context";

import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { FC } from "react";

interface PriceOptionsTypes {
  monthlyPrice: number;
  yearlyPrice: number;
}

export const PriceOption: FC<PriceOptionsTypes> = ({
  monthlyPrice,
  yearlyPrice,
}) => {
  const { billingFrequency } = useAppState();
  return (
    <StyledOptionPrice>
      {billingFrequency === ToggleLabelTypes.Monthly
        ? `$ ${monthlyPrice}/ mo`
        : `$ ${yearlyPrice}/ yr`}
    </StyledOptionPrice>
  );
};
