function StepList({ step, curStep }) {
  return (
    <li>
      <span
        className={`indecater-num ${curStep >= step.stepOrder ? "active" : ""}`}
      >
        {step.stepOrder}
      </span>
      <div className="indecater-text">
        <h4>Step {step.stepOrder}</h4>
        <p>{step.value}</p>
      </div>
    </li>
  );
}

export default StepList;
