import { ReactElement, useState } from "react";

const useMultiStepsForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;

      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;

      return i - 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    isFirst: currentStepIndex === 0,
    isLast: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepsForm;
