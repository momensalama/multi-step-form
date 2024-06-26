import { createContext, useContext, useState } from "react";
import { useApp } from "./AppContext";
import { AddOnsProps } from "../../types";

const AddOnsContext = createContext({} as AddOnsProps);

function AddOnsProvider({ children }: { children: React.ReactNode }) {
  const [addOns, setAddOns] = useState([
    {
      id: 1,
      name: "Online Service",
      value: "Access to multiplayer games",
      price: 1,
      checked: false,
    },
    {
      id: 2,
      name: "Larger Storage",
      value: "Extra 1TB of cloud save",
      price: 2,
      checked: false,
    },
    {
      id: 3,
      name: "Customizable Profile",
      value: "Custom theme on your profile",
      price: 3,
      checked: false,
    },
  ]);

  const { curStep, setCurStep } = useApp();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (curStep < 5) setCurStep((s: number) => s + 1);
  }

  function onHandleToggle(id: number) {
    setAddOns((addOns) =>
      addOns.map((ons) =>
        ons.id === id ? { ...ons, checked: !ons.checked } : ons
      )
    );
  }

  return (
    <AddOnsContext.Provider value={{ addOns, onHandleToggle, onSubmit }}>
      {children}
    </AddOnsContext.Provider>
  );
}

function useAddOns() {
  const context = useContext(AddOnsContext);
  if (context === undefined)
    throw new Error("AddOnsContext was used outside of the AddOnsProvider");
  return context;
}

export { AddOnsProvider, useAddOns };
