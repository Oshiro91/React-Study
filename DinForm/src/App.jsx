import { useState } from 'react'
import './App.css'

function App() {
  const [kpiData, setKpiData] = useState({
  "id": "integer",
  "name": "string",
  "description": "string",
  "createdAt": "date",
  "updatedAt": "date",
});
  return (
    <Fields kpiData={kpiData} />
  )
}

function Fields ({kpiData}) {
  for (const [key, value] of Object.entries(kpiData)) {
    console.log(`${key}: ${value}`);
  }
  return (
    <div>
      {Object.entries(kpiData).map(([key, value]) => (
        <Input key={key} value={value} /> 
      ))}
    </div>
  )
}

function Input ({key, value}) {
  return (
    <div>
      <label htmlFor={key}>{key}</label>
      <input type={`${value}`} id={key} name={key} value={value}  />
    </div>
  )

}

export default App


