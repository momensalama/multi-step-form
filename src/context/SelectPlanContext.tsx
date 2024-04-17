import { createContext, useContext, useState } from "react";
import { useApp } from "./AppContext";
import { SelectPlanProps } from "../../types";

const SelectPlanContext = createContext({} as SelectPlanProps);

function SelectPlanProvider({ children }: { children: React.ReactNode }) {
  const { curStep, setCurStep } = useApp();
  const [selectedPlan, setSelectedPlan] = useState({ plan: "", price: null });
  const [num, setNum] = useState(0);
  const [error, setError] = useState("");
  const [monthlyPlans] = useState([
    {
      id: 1,
      PlanName: "Arcade",
      price: 9,
      img: "icon-arcade.svg",
      alt: "arcade plan icon",
    },
    {
      id: 2,
      PlanName: "Advance",
      price: 12,
      img: "icon-advanced.svg",
      alt: "Advance plan icon",
    },
    {
      id: 3,
      PlanName: "Pro",
      price: 15,
      img: "icon-pro.svg",
      alt: "Pro plan icon",
    },
  ]);

  function handleClick(id: number) {
    setSelectedPlan({
      ...selectedPlan,
      plan: monthlyPlans[id].PlanName,
      price: monthlyPlans[id].price as any,
    });
    setNum(id + 1);
  }

  function onSubmit() {
    if (selectedPlan.plan === "" || selectedPlan.price === null) {
      setError("Please select a plan");
    } else {
      setError("");
      if (curStep < 5) setCurStep((s) => s + 1);
    }
  }

  return (
    <SelectPlanContext.Provider
      value={{ selectedPlan, monthlyPlans, handleClick, num, onSubmit, error }}
    >
      {children}
    </SelectPlanContext.Provider>
  );
}

function useSelectPlan() {
  const context = useContext(SelectPlanContext);
  if (context === undefined)
    throw new Error(
      "SelectPlanContext was used outside of the SelectPlanProvider"
    );
  return context;
}

export { SelectPlanProvider, useSelectPlan };
