import { useAddOns } from "../context/AddOnsContext";
import Button from "./Button";
import OnsList from "./OnsList";

function AddOns() {
  const { addOns, onHandleToggle, onSubmit } = useAddOns();

  return (
    <div className="step">
      <h1>Pick add-ons</h1>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>
      <form id="ons" onSubmit={onSubmit}>
        <div className="lables">
          {addOns.map((ons) => (
            <OnsList ons={ons} key={ons.name} onHandleToggle={onHandleToggle} />
          ))}
        </div>
        <div className="btns">
          <Button styling="back" action="back">
            Back
          </Button>
          <Button styling="next" action="next">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddOns;
