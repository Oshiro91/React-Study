import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [advice, setadvice] = useState("No Advice requested yet")

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setCount((c) => c + 1)
  }

  useEffect(function () {
    getAdvice();
  }, [])

  function Message(props) {
    return (
      <p>
        You have read {props.count} advices
      </p>
    )

  }

  return (
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <Message count={count} />
      </div>
    </>
  )
}

export default App
