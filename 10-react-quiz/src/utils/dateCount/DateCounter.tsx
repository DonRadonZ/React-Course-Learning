import { 
  useReducer,
  // useReducer,
  // useState
 } from "react";

import { DateCountState, CountAction, dateCountReducer } from './dateCounterReducer';




function DateCounter() {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(1);

    const initialState = {count: 0, step: 1}

    const [state, dispatch] = useReducer<(state: DateCountState, action: CountAction) => DateCountState >(dateCountReducer, initialState)
    const {count, step} = state;

    

    // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function(){
    dispatch({type: "dec"});
    //setCount((count) => count - 1);
    // setCount((count) => count- step);
  };

  const inc = function() {
    dispatch({type: "inc"});
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>){
    dispatch({type: "SET_COUNT", newCount: Number(e.target.value)})
    // setCount(Number(e.target.value));
  }

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>){
    // setStep(Number(e.target.value));
    dispatch({type: "SET_STEP", newStep: Number(e.target.value)})
  }

  const reset = function () {
    // setCount(0);
    // setStep(1);
    dispatch({type: "RESET"})
  };

  return(
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
          placeholder="step"
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} placeholder="count"/>
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;