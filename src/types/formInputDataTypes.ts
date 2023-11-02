import { Dispatch, SetStateAction } from "react";

export interface formInputDataTypes {
  name?: string;
  email?: string;
  phoneNumber?: string;
  plan?: string;
  addOn?: string;
}

export interface PersonalInfoTypes {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface PlanTypes {
  plan: string;
}

export interface AddOnTypes {
  plan: string;
}

export interface FormContextDataTypes {
  data: PersonalInfoTypes | PlanTypes | AddOnTypes;
  setFormValues: Dispatch<SetStateAction<formInputDataTypes>>;
}
