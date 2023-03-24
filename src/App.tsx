import clsx from "clsx"
import { useCallback, useMemo, useState } from "react"
import { StepEnterpriseInfo } from "./components/StepForm/StepEnterpriseInfo"
import { StepBudget } from "./components/StepForm/StepBudget"
import { FormStep } from "./layouts/FormStep"
import { StepPricing } from "./components/StepForm/StepPricing"
import { FinalStep } from "./components/StepForm/FinalStep"

const STEPS_COUNT = 4

type FormSteps = 1 | 2 | 3 | 4

export const App = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<FormSteps>(1)

  const handleNextStep = useCallback((): void => {
    const nextStep = (currentStep + 1) as FormSteps

    if (currentStep < STEPS_COUNT) setCurrentStep(nextStep)
  }, [currentStep])

  const handlePrevStep = useCallback((): void => {
    const prevStep = (currentStep - 1) as FormSteps

    if (currentStep > 1) setCurrentStep(prevStep)
  }, [currentStep])

  const getCurrentStep = useMemo((): JSX.Element => {
    const steps = {
      1: (
        <FormStep
          title="Bonjour je m'appele max, j'aurais besoin de quelques informations."
          currentStep={currentStep}
          progress={0}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        >
          <StepEnterpriseInfo />
        </FormStep>
      ),
      2: (
        <FormStep
          title="Ami courtier, vous pouvez parametrer votre rémuneration !"
          currentStep={currentStep}
          progress={33}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        >
          <StepBudget />
        </FormStep>
      ),
      3: (
        <FormStep
          title="J'aurais besoin de conaitre vos préférences en matière de cotisation."
          currentStep={currentStep}
          progress={66}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        >
          <StepPricing />
        </FormStep>
      ),
      4: (
        <FormStep
          title="Merci je vais vous proposer un devis au plus vite"
          currentStep={currentStep}
          progress={100}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        >
          <FinalStep />
        </FormStep>
      )
    }

    return steps[currentStep]
  }, [currentStep])

  return (
    <main
      className={clsx(
        "px-4 sm:max-w-[640px] mx-auto",
        "min-h-screen",
        "mt-4 sm:mt-0 sm:flex flex-col items-center justify-center"
      )}
    >
      {getCurrentStep}
    </main>
  )
}
