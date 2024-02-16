import React, { Dispatch, FC, SetStateAction } from "react";
import {
  RadioSwitch,
  RadioSwitchInner,
  Input,
  RadioSwitchLabel,
  VisuallyHiddenLegend,
} from "./ToggleSwitch.style";
import { useAppState } from "@/context";

interface ToggleSwitchProps {}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({}) => {
  const { billingFrequency, setSelectedBillingFrequency } = useAppState();

  const handleToggleChange = (value: string) => {
    setSelectedBillingFrequency(value);
  };

  return (
    <RadioSwitch>
      <VisuallyHiddenLegend>Billing frequency</VisuallyHiddenLegend>
      <RadioSwitchInner>
        <Input
          type="radio"
          name="pay-type"
          id="monthly"
          value="Monthly"
          checked={billingFrequency === "Monthly"}
          onChange={(event) => handleToggleChange(event.target.value)}
        />
        <RadioSwitchLabel htmlFor="monthly">Monthly</RadioSwitchLabel>
        <Input
          type="radio"
          name="pay-type"
          id="yearly"
          value="Yearly"
          checked={billingFrequency === "Yearly"}
          onChange={(event) => handleToggleChange(event.target.value)}
        />

        <RadioSwitchLabel htmlFor="yearly">Yearly</RadioSwitchLabel>
      </RadioSwitchInner>
    </RadioSwitch>
  );
};
