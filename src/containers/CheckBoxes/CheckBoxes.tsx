"use client";
import {
  useController,
  Control,
  useForm,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import {
  StyledInput,
  StyledOptionWrapper,
  StyledLabel,
  StyledOptionName,
  Wrapper,
} from "./CheckBoxes.style";
import * as yup from "yup";
import { useAppState } from "@/context";
import { FC } from "react";
import { AddOnTypes } from "@/types/formInputDataTypes";
import addOnOptions from "../../data/addOnInfo.json";
import { PriceOption } from "../../components/PriceOption/PriceOption";
import { yupResolver } from "@hookform/resolvers/yup";

interface CheckBoxesTypes {
  name: "addOn" | `addOn.${number}`;
  control: Control<AddOnTypes>;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

export const CheckBoxes: FC<CheckBoxesTypes> = ({ control, name }) => {
  const { addOn, setAddOn } = useAppState();

  const { field } = useController({
    control,
    name,
  });
  const isSelected = (name: string) => {
    return addOn.includes(name);
  };

  return (
    <>
      {Object.entries(addOnOptions).map(([optionType, optionInfo], index) => (
        <StyledOptionWrapper key={optionType} selected={isSelected(optionType)}>
          <StyledLabel htmlFor={optionType}>
            <StyledInput
              type="checkbox"
              id={optionType}
              name={name}
              onChange={(e: any) => {
                const addOnCopy = [...addOn];
                // update checkbox value
                addOnCopy[index] = e.target.checked ? e.target.value : null;

                // update selected property in addOnOptions

                // send data to react hook form
                field.onChange(addOnCopy);

                // update local state
                setAddOn(addOnCopy.filter((val) => val !== null));
              }}
              defaultChecked={isSelected(optionType)}
              value={optionType}
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
