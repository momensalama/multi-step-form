import { OnsListProps } from "../../types";

function OnsList({ ons, onHandleToggle }: OnsListProps) {
  return (
    <label htmlFor="chech" key={ons.id} className={ons.checked ? "active" : ""}>
      <input
        type="checkbox"
        name="check"
        id="check"
        checked={ons.checked}
        onChange={() => onHandleToggle(ons.id)}
      />
      <div className="ons-content">
        <div className="ons-text">
          <h3>{ons.name}</h3>
          <p>{ons.value}</p>
        </div>
        <span className="ons-price">+${ons.price}/mo</span>
      </div>
    </label>
  );
}

export default OnsList;
