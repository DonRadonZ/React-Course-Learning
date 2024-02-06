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
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>🖐️</p>
      </StepMessage>
      
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

        
          
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
          <Button
            bgColor="#e7e7e7"
            textColor="#333"
            onClick={() => alert(`Learn how to ${messages[step - 1]}`)}          
          >Learn how
            </Button>
            </div>
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

function StepMessage({ step, children }) {
  
  return(
  <div className="message">
         <h3>Step {step}</h3>
        {children}
    </div>
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