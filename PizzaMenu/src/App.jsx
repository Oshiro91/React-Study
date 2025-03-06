import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

function Avatar() {
  return (
    <div>
      <img className='avatar' src="/images/pizzas/profile.jpg" alt="Fernando Oshiro" />
    </div>
  )
}

function Intro() {
  return (
    <div>
      <h1>Fernando Oshiro</h1>
      <p>SAP consultant, especialized on MII module and UI5 front-end developer. Recently certified as a Developer integration SAP CPI</p>
    </div>
  )
}

function SkillList() {
  return (
    <div>

    </div>
  )
}

function Skill() {
  return (
    <div>
      
    </div>
  )  
}

function App() {
return(
  <div className='card'>
    <Avatar/>
    <div className='data'>
      <Intro/>
      <SkillList/>
    </div>
  </div>
)
  
}

export default App
