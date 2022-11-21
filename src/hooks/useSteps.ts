import { useState } from "react";

const useSteps = (stepsCount: number, initialIndex = 0) => {
  const [currentStep, setCurrentStep] = useState(initialIndex);

  const stepNumber = currentStep + 1;
  const percentage = (currentStep / stepsCount) * 100;

  const isFirst = currentStep === 0;
  const isLast = currentStep === stepsCount - 1;

  const nextStep = () => {
    if (!isLast) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (!isFirst) setCurrentStep(currentStep - 1);
  };

  const reset = () => setCurrentStep(0);

  return {
    isFirst,
    isLast,
    stepNumber,
    percentage,
    stepIndex: currentStep,
    nextStep,
    prevStep,
    reset,
  };
};
export default useSteps;
