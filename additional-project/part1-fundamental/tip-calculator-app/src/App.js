import dollarIcon from "../src/assets/image/icon-dollar.svg"
import peopleIcon from "../src/assets/image/icon-person.svg"
import logo from "../src/assets/image/logo.svg"

import { useState } from "react";


 

export default function App() {
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(null);
  const [people, setPeople] = useState(0);
  

  const amount = (bill * percent) / people;
  const total = (bill / people) + amount;

  
  
  function handleSelection() {
    setPercent((e) => Number(e.target.value));
  }

  

  function handleReset() { 
    setBill(0)
    setPercent(0)
    setPeople(0)
  }
  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter-Logo" />
      <div className="container">
        <div className="form">
          <ValueForm
            bill={bill}
            setBill={setBill}
            percent={percent}
            people={people}
            setPeople={setPeople} 
            selectedPercent={handleSelection} 
          />
        </div>
        <div className="display">
          <Calculator amount={amount} total={total} />
          <div className="reset">
          <Reset onReset={handleReset}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Calculator({amount,total}) {
  return (
    <div className="display">
      <div className="dispay-row">
        <div>
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <div className="display-amount">
            <p className="value">$ {amount}</p>
          </div>
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <div className="display-amount">
            <p className="value">$ {total}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

function TipForm({bill, setBill}) { 
  
  return (
    <div className="label-group">
      <label>Bill</label>
      <input type="text" id="bill" placeholder="bill" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <img src={dollarIcon} aria-hidden="true" className="icon" alt="dollar"/>
    </div>
  )
}

function PeopleForm({people,setPeople}) { 
  
  return (
    <div className="label-group">
      <div className="label-wrapper">
        <label>People</label>
        <input type="text" id="people" placeholder="people" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
        <img src={peopleIcon} aria-hidden="true" className="icon" alt="people" />
      </div>
    </div>
  )
}

function PercentChoice({percent,selectedPercent}){
  return (
    <div>
      <h3>Select Tip %</h3>
      <div>
        <input type="radio" value="5" onChange={selectedPercent}/>
        <label>5%</label>
      </div>
      <div>
        <input type="radio" value="10" onChange={selectedPercent} />
        <label>10%</label>
      </div>
      <div>
        <input type="radio" value="15" onChange={selectedPercent} />
        <label>15%</label>
      </div>
      <div>
        <input type="radio" value="25" onChange={selectedPercent} />
        <label>25%</label>
      </div>
      <div>
        <input type="radio" value="50" onChange={selectedPercent} />
        <label>50%</label>
      </div>
      <input type="text" placeholder="custom" onChange={selectedPercent}/>
      
    </div>
  )
}

function Reset({onReset}) {
  return (
    <button className="reset" onClick={onReset}>Reset</button>
  )
}

function ValueForm({bill,setBill,percent,people,setPeople}) {
  return (
    <div className="form">
      <TipForm bill={bill} setBill={setBill} />
      <PercentChoice percent={percent} />
      <PeopleForm people={people} setPeople={setPeople}/>
    </div>
  )
}