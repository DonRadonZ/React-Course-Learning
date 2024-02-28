import { useState } from "react";

// type DateCounterProps = {

// }

function DateCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function(){
    //setCount((count) => count - 1);
    setCount((count) => count- step);
  };

  const inc = function() {
    // setCount((count) => count + 1);
    setCount((count) => count + step);
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>){
    setCount(Number(e.target.value));
  }

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>){
    setStep(Number(e.target.value));
  }

  const reset = function () {
    setCount(0);
    setStep(1);
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