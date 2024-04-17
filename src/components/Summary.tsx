import { useAddOns } from "../context/AddOnsContext";
import { useApp } from "../context/AppContext";
import { useSelectPlan } from "../context/SelectPlanContext";
import Button from "./Button";

function Summary() {
  const { addOns } = useAddOns();
  const { setCurStep } = useApp();
  const { selectedPlan } = useSelectPlan();

  const filtredOns = addOns.filter((ons) => ons.checked === true);
  const filterPrices = filtredOns.map((ons) => ons.price);
  const totalPrice = filterPrices.reduce((acc, cur) => acc + cur, 0);

  function handleChangeBtn() {
    setCurStep(1);
  }

  return (
    <div className="step">
      <h1>Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary-content" id="summary">
        <div className="details">
          <div className="plan-select">
            <div className="plan-title">
              <h2>{selectedPlan.plan} (Monthly)</h2>
              <span>${selectedPlan.price}/mo</span>
            </div>
            <button className="change" onClick={handleChangeBtn}>
              change
            </button>
          </div>
          <ul>
            {filtredOns.map((ons) => (
              <li key={ons.id}>
                <h3>{ons.name}</h3>
                <span>+${ons.price}/mo</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="total">
          <h4>Total (per month)</h4>
          <span>${totalPrice + selectedPlan.price}/mo</span>
        </div>
      </div>
      <div className="btns">
        <Button styling="back" action="back">
          Back
        </Button>
        <Button styling="next" action="next">
          Next
        </Button>
      </div>
    </div>
  );
}

export default Summary;
