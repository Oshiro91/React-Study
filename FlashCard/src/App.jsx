import React from 'react'
import { useState } from 'react'
import './App.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(s => s - 1)
      else alert("You can't go back")
  }

  function handleNext() {
    if (step < 3) setStep(s => s + 1)
      else alert("You can't go next")
  }

  
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : 'innactive'}`}>1</div>
        <div className={`${step >= 2 ? 'active' : 'innactive'}`}>2</div>
        <div className={`${step >= 3 ? 'active' : 'innactive'}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Previous</button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
