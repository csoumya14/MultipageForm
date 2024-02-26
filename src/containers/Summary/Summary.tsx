"use client";
import { useAppState } from "@/context";
import planOptions from "../../data/planOptions.json";
import addOnOptions from "../../data/addOnInfo.json";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { planOptionsType } from "@/types/planOptionsTypes";
import { addOnInfoType } from "@/types/addOnInfoTypes";
import { FC } from "react";
import {
  ListContainer,
  ListItemOption,
  ListItemPlan,
  ListItemTotal,
} from "./Summary.style";

export interface SummaryTypes {}

export const Summary: FC<SummaryTypes> = ({}) => {
  const { plan, billingFrequency, addOn } = useAppState();
  const planName = plan.planName;

  const addOnPriceMonthly = addOn.reduce(
    (accumulator, currentKey) =>
      addOnOptions[currentKey as keyof addOnInfoType].price.monthly +
      accumulator,
    0
  );

  const addOnPriceYearly = addOn.reduce(
    (accumulator, currentKey) =>
      addOnOptions[currentKey as keyof addOnInfoType].price.yearly +
      accumulator,
    0
  );

  const priceInfo = planOptions[planName as keyof planOptionsType].price;

  const totalPrice =
    billingFrequency === ToggleLabelTypes.Monthly
      ? addOnPriceMonthly + priceInfo.monthly
      : addOnPriceYearly + priceInfo.yearly;

  console.log(totalPrice);

  console.log("sum", addOnPriceMonthly, addOnPriceYearly);
  return (
    <ListContainer>
      <ListItemPlan>
        {planName}
        {billingFrequency === ToggleLabelTypes.Monthly
          ? "(monthly)"
          : "(yearly)"}
        <span>
          {billingFrequency === ToggleLabelTypes.Monthly
            ? `$ ${
                planOptions[planName as keyof planOptionsType].price.monthly
              }/ mo`
            : `$ ${
                planOptions[planName as keyof planOptionsType].price.yearly
              }/ yr`}
        </span>
      </ListItemPlan>
      {addOn.map((item) => (
        <ListItemOption key={item}>
          {addOnOptions[item as keyof addOnInfoType].title}{" "}
          <span>
            {billingFrequency === ToggleLabelTypes.Monthly
              ? `+$${
                  addOnOptions[item as keyof addOnInfoType].price.monthly
                }/ mo`
              : `+$${
                  addOnOptions[item as keyof addOnInfoType].price.yearly
                }/ yr`}{" "}
          </span>
        </ListItemOption>
      ))}
      <ListItemTotal>
        Total
        {billingFrequency === ToggleLabelTypes.Monthly
          ? "(per month)"
          : "(per year)"}
        <span>
          {billingFrequency === ToggleLabelTypes.Monthly
            ? `$${totalPrice}/ mo`
            : `$${totalPrice}/ yr`}{" "}
        </span>
      </ListItemTotal>
    </ListContainer>
  );
};
