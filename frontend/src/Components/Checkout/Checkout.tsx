import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { StepContent } from "@mui/material";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review";
export default function Checkout() {
  const steps = ["Shipping address", "Payment details", "Review"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="flex gap-2 flex-col">
        <div className="w-[500px] p-3 shadow">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-text font-semibold">Checkout</span>
            <hr />
            <div className="div">
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step}>
                    <StepLabel
                      icon={
                        <span className="text-white text-xs font-bold bg-primary w-5 h-5 rounded-full flex justify-center items-center">
                          {index + 1}
                        </span>
                      }
                    >
                      <span className="text-text">{step}</span>
                    </StepLabel>
                    <StepContent>
                      <div className="min-h-60 p-2 mb-4">
                        {index === 0 && <Shipping />}
                        {index === 1 && <Payment />}
                        {index === 2 && <Review />}
                      </div>

                      <div className="flex gap-2 justify-end w-full">
                        <button
                          className="bg-white text-primary px-4 p-2 w-fit disabled:text-text-variant"
                          onClick={handleBack}
                          disabled={activeStep <= 0}
                        >
                          {"BACK"}
                        </button>
                        <button
                          className="bg-primary text-white  px-4 p-2 w-fit disabled:opacity-50"
                          onClick={handleNext}
                          disabled={activeStep >= 2}
                        >
                          {activeStep === steps.length - 1
                            ? "Confirm Payment"
                            : "CONTINUE"}
                        </button>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
