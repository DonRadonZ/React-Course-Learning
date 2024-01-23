import {useState} from "react"
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
 const [step, setStep] = useState(1)
//  const [test, setTest] = useState({name: "Don"})
 



 function handlePrevious() {
  if(step > 1) setStep(step - 1);
 }

 function handleNext() {
  if(step < 3) setStep(step + 1 );

  //BAD PRACTICE
  // test.name = "NY"
  // setTest({name: "NY"})
 }

  return( 
  <div className="steps" style={{backgroundColor: "#DCF2F1"}}>
    <div className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
    </div>

    <p className="message">
    Step {step}: {messages[step - 1]}
    {test.name}
    </p>

    <div className="buttons">
      <button style={{backgroundColor: "#7FC7D9", color: "#0F1035"}} 
      onClick={handlePrevious}
      >
      Previous
      </button>
      <button style={{backgroundColor: "#7FC7D9", color: "#0F1035"}} 
      onClick={handleNext}
      >
      Next
      </button>
    </div>
  </div>
)
}