import { useApp } from "../context/AppContext";
function Button({ children, styling, action = "", handleClick = "" }) {
  const { curStep, setCurStep } = useApp();

  function handleNext() {
    if (curStep < 5) setCurStep((s) => s + 1);
  }

  function handlePrev() {
    if (curStep > 1) setCurStep((s) => s - 1);
  }

  function handleOnCLick() {
    handleClick();
  }

  const actions = {
    back: handlePrev,
    next: handleNext,
    click: handleOnCLick,
  };

  return (
    <button className={styling} onClick={actions[action]}>
      {children}
    </button>
  );
}

export default Button;
