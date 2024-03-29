import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  const messages = ["Learn React®️", "Apply for Job💼", "Get the job done🤑"];
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step === 1 ? "active" : ""}`}>1</div>
            <div className={`${step === 2 ? "active" : ""}`}>2</div>
            <div className={`${step === 3 ? "active" : ""}`}>3</div>
          </div>
          {/* <div className="message">
            Step: {step} {messages[step - 1]}
          </div> */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <button
              bgcolor="#c7c7c7"
              textcolor="#333"
              onClick={() => alert(`Learn How to ${messages[step - 1]}`)}
            >
              Learn How
            </button>
          </StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step : {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
// import { useState } from "react";

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setOpen] = useState(false);

//   const messages = ["Learn React®️", "Apply for Job💼", "Get the job done🤑"];

//   function handlePrevious() {
//     if (step > 1) {
//       setStep((s) => s - 1);
//     }
//   }

//   function handleNext() {
//     if (step < 3) {
//       setStep((s) => s + 1);
//     }
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={`${step === 1 ? "active" : ""}`}>1</div>
//             <div className={`${step === 2 ? "active" : ""}`}>2</div>
//             <div className={`${step === 3 ? "active" : ""}`}>3</div>
//           </div>

//           <p className="message">
//             Step: {step} {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "white" }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{ backgroundColor: "#7950f2", color: "white" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
