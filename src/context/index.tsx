import { formInputDataTypes } from "@/types/formInputDataTypes";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const AppStateContext = createContext<formInputDataTypes>({
  profile: { firstName: "", email: "", phoneNumber: "" },
  plan: { planName: "Arcade" },
  billingFrequency: "Yearly",
  addOn: ["Online Service"],
  setSelectedBillingFrequency: () => {},
  setProfile: () => {},
  setPlan: () => {},
  setAddOn: () => {},
});

export function AppProvider({ children }: Props) {
  const [profile, setProfile] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });
  const [plan, setPlan] = useState({ planName: "Arcade" });
  const [addOn, setAddOn] = useState(["multiplayer"]);
  const [billingFrequency, setSelectedBillingFrequency] =
    useState<string>("Yearly");

  return (
    <AppStateContext.Provider
      value={{
        profile,
        plan,
        billingFrequency,
        setSelectedBillingFrequency,
        addOn,
        setProfile,
        setPlan,
        setAddOn,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider");
  }
  return context;
}
