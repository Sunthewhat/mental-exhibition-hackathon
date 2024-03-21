import { useState } from "react"

export function useMultiStepForm(steps: number) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex(i => {
    window.scrollTo({ top: 0, behavior: "smooth" });        
      if (i >= steps - 1) return i
      return i + 1
    })
  }



  return {
    currentStepIndex,
    isLastStep: currentStepIndex === steps - 1,
    next,
  }
}