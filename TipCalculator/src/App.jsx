import { useState } from 'react'
import './App.css'

const satisfaction = [
  {
    rate: 0,
    label: 'Dissatisfied(0%)'
  },
  {
    rate: 5,
    label: 'It was okay(5%)'
  },
  {
    rate: 10,
    label: 'It was good(10%)'
  },
  {
    rate: 20,
    label: 'Absolutely amazing!(20%)'
  }
]

function Select({ satisfaction, onSelect }) {
  return (
    <select onChange={onSelect}>
      {satisfaction.map(item => <option value={item.rate} key={item.rate}>{item.label}</option>)}
    </select>
  )
}
function Input({ type, value, children, onChange }) {
  return (
    <>
      <input type={type} value={value} onChange={onChange}>{children}</input>
    </>
  )
}
function App() {
  const [bill, setBill] = useState(100)
  const [mySatisfaction, setMySatisfaction] = useState(0)
  const [friendSatisfaction, setFriendSatisfaction] = useState(0) 
  function handleBillChange(e) {
    setBill(Number(e.target.value))
  }

  return (
    <div className="App">
      <div>
        <span>How much was the bill?</span>
        <Input type={'number'} value={bill} onChange={handleBillChange} ></Input>
      </div>
      <div>
        <span>How did you like the service?</span>
        <Select satisfaction={satisfaction} onSelect={() => { }}></Select>
      </div>
      <div>
        <span>How did your friend like the service?</span>
        <Select satisfaction={satisfaction} onSelect={() => { }}></Select>
      </div>
      <div>
        <span>You pay ${bill} (${} + ${})</span>
      </div>
    </div>
  )
}

export default App
