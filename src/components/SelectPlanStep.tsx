import { useSelectPlan } from "../context/SelectPlanContext";
import Button from "./Button";
import Plan from "./Plan";

function SelectPlanStep() {
  const { monthlyPlans, handleClick, num, onSubmit, error } = useSelectPlan();

  return (
    <div className="step">
      <h1>Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>
      {<span className="error">{error}</span>}
      <div className="plans-content">
        <ul className="plans" id="plan">
          {monthlyPlans.map((plan, index) => (
            <Plan
              plan={plan}
              num={num}
              index={index}
              key={index}
              handleClick={handleClick}
            />
          ))}
        </ul>
        <div className="btns">
          <Button styling="back" action="back">
            Back
          </Button>
          <Button styling="next" action="click" handleClick={onSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SelectPlanStep;
