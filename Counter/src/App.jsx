import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const [isReset, setIsReset] = useState(true)

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleStep(e) {
    setStep(Number(e.target.value))
    setIsReset(false);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
    setIsReset(true);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
    setIsReset(false);
  }
  function handleCountMinus() {
    setCount((c) => c - step);
    setIsReset(false);
  }

  return (

    <div>
      <div>
        <input type='range' min={1} max={10} onChange={handleStep} value={step}/>
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <input type="number" placeholder='1' value={count} onChange={e=>setCount(Number(e.target.value))}></input>
        <button onClick={handleCountPlus}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        <button hidden={isReset} onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
