import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious(s) {
    if (s > 1) {
      setStep(s - 1);
    }
  }
  function handleNext(s) {
    if (s < 3) {
      setStep(s + 1);
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
        <div className="message">
          Step: {step} {messages[step - 1]}
        </div>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "white" }}
            onClick={() => handlePrevious(step)}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "white" }}
            onClick={() => handleNext(step)}
          >
            Next
          </button>
        </div>
      </div>
      )}
    </>
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
