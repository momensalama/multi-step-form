import { PlanProps } from "../../types";

function Plan({ plan, handleClick, index, num }: PlanProps) {
  return (
    <li
      onClick={() => handleClick(index)}
      id={plan.id.toString()}
      className={num !== index + 1 ? "" : "active"}
    >
      <img src={plan.img} alt={plan.alt} />
      <div className="plan-text">
        <h3>{plan.PlanName}</h3>
        <span>${plan.price}/mo</span>
      </div>
    </li>
  );
}

export default Plan;
