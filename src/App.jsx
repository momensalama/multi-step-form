import Sidebar from "./components/Sidebar";
import StepsContainer from "./components/StepsContainer";
import AddOns from "./components/AddOns";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlanStep from "./components/SelectPlanStep";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import { useApp } from "./context/AppContext";

function App() {
  const { curStep } = useApp();

  const components = [
    <PersonalInfo />,
    <SelectPlanStep />,
    <AddOns />,
    <Summary />,
    <ThankYou />,
  ];

  return (
    <main>
      <div className="step-container">
        <Sidebar curStep={curStep} />
        <StepsContainer>{components[curStep - 1]}</StepsContainer>
      </div>
    </main>
  );
}

export default App;
