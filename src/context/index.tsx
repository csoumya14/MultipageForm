import {
  FormContextDataTypes,
  formInputDataTypes,
} from "@/types/formInputDataTypes";
import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  children?: ReactNode;
}

const defaultValues = {
  data: {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    plan: "",
    planTerm: "",
  },
  setFormValues: (): void => {},
};

export const AppStateContext =
  createContext<FormContextDataTypes>(defaultValues);

export function AppProvider({ children }: Props) {
  const [data, setData] = useState({});

  const setFormValues = (values: {}) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };
  return (
    <AppStateContext.Provider value={{ data, setFormValues }}>
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
