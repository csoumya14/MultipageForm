"use client";
import { useController, Control } from "react-hook-form";
import {
  StyledInput,
  StyledOptionWrapper,
  StyledLabel,
  StyledOptionName,
  Wrapper,
} from "./CheckBoxes.style";

import { useAppState } from "@/context";
import { FC } from "react";
import { AddOnTypes } from "@/types/formInputDataTypes";
import addOnOptions from "../../data/addOnInfo.json";
import { PriceOption } from "../PriceOption/PriceOption";

interface CheckBoxesTypes {
  name: "addOn" | `addOn.${number}`;
  control?: Control<AddOnTypes>;
  watchAddOn: string[];
}

export const CheckBoxes: FC<CheckBoxesTypes> = ({
  control,
  name,
  watchAddOn,
}) => {
  const { addOn, setAddOn } = useAppState();
  const { field } = useController({
    control,
    name,
  });

  const isSelected = (name: string) => {
    return watchAddOn ? watchAddOn.includes(name) : addOn.includes(name);
  };

  return (
    <>
      {Object.entries(addOnOptions).map(([optionType, optionInfo], index) => (
        <StyledOptionWrapper
          key={optionType}
          selected={isSelected(optionType)}
        >
          <StyledLabel htmlFor={optionType}>
            <StyledInput
              type="checkbox"
              id={optionType}
              onChange={(e: any) => {
                const addOnCopy = [...addOn];
                // update checkbox value
                addOnCopy[index] = e.target.checked ? e.target.value : null;

                // update selected property in addOnOptions

                // send data to react hook form
                field.onChange(addOnCopy);

                // update local state
                setAddOn(addOnCopy);
              }}
              value={optionType}
              name="planOptions"
            />
            <Wrapper>
              <StyledOptionName>{optionInfo.title}</StyledOptionName>
              <PriceOption
                monthlyPrice={optionInfo.price.monthly}
                yearlyPrice={optionInfo.price.yearly}
              />
            </Wrapper>
          </StyledLabel>
        </StyledOptionWrapper>
      ))}
    </>
  );
};
