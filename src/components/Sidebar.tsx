import StepList from "./StepList";

const stepsObj = [
  { stepOrder: 1, value: "YOUR INFO" },
  { stepOrder: 2, value: "SELECT PLAN" },
  { stepOrder: 3, value: "ADD-ONS" },
  { stepOrder: 4, value: "SUMMARY" },
];

function Sidebar({ curStep }: { curStep: number }) {
  return (
    <div className="sidebar">
      <ul className="steps">
        {stepsObj.map((step) => (
          <StepList step={step} key={step.stepOrder} curStep={curStep} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
