import { Dispatch, SetStateAction } from "react";

export interface formInputDataTypes {
  profile: PersonalInfoTypes;
  plan: IndividualPlanTypes;
  billingFrequency: string;
  addOn: string[];
  setSelectedBillingFrequency: React.Dispatch<React.SetStateAction<string>>;
  setProfile: React.Dispatch<React.SetStateAction<PersonalInfoTypes>>;
  setPlan: React.Dispatch<React.SetStateAction<IndividualPlanTypes>>;
  setAddOn: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface PersonalInfoTypes {
  firstName: string;
  email: string;
  phoneNumber: string;
}

export interface IndividualPlanTypes {
  planName: string;
}

export interface PlanTypes {
  planValues: IndividualPlanTypes;
}

export interface AddOnTypes {
  addOn: string[];
}



export interface FormContextDataTypes {
  data: formInputDataTypes;
  setFormValues: Dispatch<SetStateAction<formInputDataTypes>>;
}
