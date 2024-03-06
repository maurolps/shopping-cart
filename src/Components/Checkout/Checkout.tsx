import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
export default function Checkout() {
  const steps = ["Shipping address", "Payment details", "Review"];
  const stepDescription = ["Shipping", "Payment", "Review"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <span className=" text-3xl font-bold">Checkout</span>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <p className="text-center text-lg font-bold">
        {stepDescription[activeStep]}
      </p>
      <div className="flex gap-2 m-auto">
        <button
          className="bg-primary text-white text-sm px-4 p-2 w-fit disabled:opacity-50"
          onClick={handleBack}
          disabled={activeStep <= 0}
        >
          Back
        </button>
        <button
          className="bg-primary text-white text-sm px-4 p-2 w-fit disabled:opacity-50"
          onClick={handleNext}
          disabled={activeStep >= 2}
        >
          {activeStep === steps.length - 1 ? "Confirm Payment" : "Next"}
        </button>
      </div>
    </>
  );
}
