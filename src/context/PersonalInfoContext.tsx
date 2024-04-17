import { createContext, useContext } from "react";
import { useApp } from "./AppContext";
import { useForm } from "react-hook-form";
import { PersonalInfoProps } from "../../types";

const PersonalInfoContext = createContext({} as PersonalInfoProps);

const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$/;
const isValidPhone = /^(?:\+20|0)?1[0-9]{9}$/;

function PersonalInfoProvider({ children }: { children: React.ReactNode }) {
  const { curStep, setCurStep } = useApp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const checkStep = curStep < 5;
    if (checkStep) {
      setCurStep((s) => s + 1);
    }
  };

  return (
    <PersonalInfoContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
        errors,
        isValidEmail,
        isValidPhone,
      }}
    >
      {children}
    </PersonalInfoContext.Provider>
  );
}

function usePersonalInfo() {
  const context = useContext(PersonalInfoContext);
  if (context === undefined)
    throw new Error(
      "PersonalInfoContext was used outside of the PersonalInfoProvider"
    );
  return context;
}

export { PersonalInfoProvider, usePersonalInfo };
