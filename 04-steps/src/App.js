import {useState} from "react"
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
 const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true);

//  const [test, setTest] = useState({name: "Don"})
 



 function handlePrevious() {
  if(step > 1) setStep((s) => s - 1);
 }

 function handleNext() {
   if (step < 3) {
     setStep((s) => s + 1);
     // setStep((s) => s + 1);
   };

  //BAD PRACTICE
  // test.name = "NY"
  // setTest({name: "NY"})
 }

  return( 
  <>
  <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
    { isOpen && (
      <div className="steps" style={{backgroundColor: "#DCF2F1"}}>
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
        Step {step}: {messages[step - 1]}
        {/* {test.name} */}
        </p>

        <div className="buttons">
            <Button
              bgColor="#7FC7D9"
              textColor="#0F1035"
              onClick={handlePrevious}
            ><span>◀️</span> Previous </Button>
            <Button
              bgColor="#7FC7D9"
              textColor="#0F1035"
              onClick={handleNext}
            > Next <span>▶️</span></Button>
        </div>
      </div>
    )}
  </>
    
)
}

function Button({textColor, bgColor, onClick, children}) {
  return(
    <button style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {children}
      </button>
  )
}