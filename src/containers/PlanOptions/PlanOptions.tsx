"use client";
import { useForm } from "react-hook-form";
import {
  StyledInput,
  StyledOptionWrapper,
  StyledLabel,
  StyledOptionName,
  StyledFreeMessage,
  Container,
} from "./PlanOptions.style";
import { useAppState } from "@/context";
import { IndividualPlanTypes } from "@/types/formInputDataTypes";
import { SvgArcade } from "@/components/SVGs/SvgArcade/SvgArcade";
import { SvgAdvanced } from "@/components/SVGs/SvgAdvanced/SvgAdvanced";
import { SvgPro } from "@/components/SVGs/SvgPro/SvgPro";
import { ToggleLabelTypes } from "@/enums/ToggleLabel";
import planOptions from "../../data/planOptions.json";
import { FC } from "react";
import { PriceOption } from "../../components/PriceOption/PriceOption";

interface PlanOptionsTypes {}

export const iconList = [
  {
    icon: <SvgArcade />,
  },
  {
    icon: <SvgAdvanced />,
  },
  {
    icon: <SvgPro />,
  },
];

export const PlanOptions: FC<PlanOptionsTypes> = ({}) => {
  const { plan, billingFrequency, setSelectedBillingFrequency, setPlan } =
    useAppState();

  const { register, setValue, getValues, watch } = useForm<IndividualPlanTypes>(
    { mode: "onChange" }
  );

  const watchPlan = watch("planName", "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("planName", e.target.value);
    const values = getValues();
    setPlan(values);
  };

  return (
    <Container>
      {Object.entries(planOptions).map(([planType, planInfo], index) => (
        <StyledOptionWrapper
          key={planType}
          selected={
            watchPlan ? watchPlan === planType : plan.planName === planType
          }
        >
          {iconList[index].icon}
          <StyledLabel htmlFor={planType}>
            <StyledInput
              {...register("planName")}
              type="radio"
              id={planType}
              onChange={handleChange}
              value={planType}
              defaultValue={plan.planName}
              name="planOptions"
            />
            <StyledOptionName>{planType}</StyledOptionName>
            <PriceOption
              plan
              monthlyPrice={planInfo.price.monthly}
              yearlyPrice={planInfo.price.yearly}
            />
            <StyledFreeMessage>
              {billingFrequency === ToggleLabelTypes.Yearly
                ? "2 months free"
                : ""}
            </StyledFreeMessage>
          </StyledLabel>
        </StyledOptionWrapper>
      ))}
    </Container>
  );
};
