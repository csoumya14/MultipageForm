"use client";
import { useController, Control } from "react-hook-form";
import {
  StyledInput,
  StyledOptionWrapper,
  StyledLabel,
  StyledOptionName,
  StyledOptionPrice,
  StyledFreeMessage,
} from "./CheckBoxes.style";

import { useAppState } from "@/context";
import { FC } from "react";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import { AddOnTypes } from "@/types/formInputDataTypes";

interface addOnOptionType {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  textDescription: string;
}

interface CheckBoxesTypes {
  addOnOptions: addOnOptionType[];
  name: "addOn" | `addOn.${number}`;
  control?: Control<AddOnTypes>;
}

export const CheckBoxes: FC<CheckBoxesTypes> = ({
  addOnOptions,
  control,
  name,
}) => {
  const { addOn, billingFrequency, setAddOn } = useAppState();
  const { field } = useController({
    control,
    name,
  });

  return (
    <>
      {addOnOptions?.map((option, index) => (
        <StyledOptionWrapper key={option.id} selected>
          <StyledLabel htmlFor={option.id}>
            <StyledInput
              type="checkbox"
              id={option.id}
              onChange={(e: any) => {
                const addOnCopy = [...addOn];

                // update checkbox value
                addOnCopy[index] = e.target.checked ? e.target.value : null;

                // send data to react hook form
                field.onChange(addOnCopy);

                // update local state
                setAddOn(addOnCopy);
              }}
              value={option.name}
              name="planOptions"
            />
            <StyledOptionName>{option.name}</StyledOptionName>
            <StyledOptionPrice>
              {billingFrequency === ToggleLabelTypes.Monthly
                ? `$ ${option.priceMonthly}/ mo`
                : `$ ${option.priceYearly}/ yr`}
            </StyledOptionPrice>
            <StyledFreeMessage>
              {billingFrequency === ToggleLabelTypes.Yearly
                ? "2 months free"
                : ""}
            </StyledFreeMessage>
          </StyledLabel>
        </StyledOptionWrapper>
      ))}
    </>
  );
};
