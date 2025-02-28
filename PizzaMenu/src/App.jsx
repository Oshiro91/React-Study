import { useEffect, useState } from 'react'
import './App.css'

function Header() {
  return (
    <h1>Fast React Pizza Co.</h1>
  )
}

function Menu() {
  return(
    <div>
      <h2>Our Menu</h2><Pizza/>
    </div>
  )
}

function Pizza(){
  return(
    <div>
      <img src="/public/images/pizzas/spinaci.jpg" />
      <h2>Pizza Spinacci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  if (hour >= openHour && hour <= closeHour) {
    return (
      <footer>
        <p><b>{new Date().toLocaleTimeString()}</b> We are currently open!</p>
      </footer>
    )
  } else {
    return (
      <footer>
        <p><b>{new Date().toLocaleTimeString()}</b> Sorry, we are closed.</p>
      </footer>
    )
  }


}


function App() {

  return (
    <>
      <div>
        <Header />
        <Menu/>
        <Footer />
      </div>
    </>
  )
}

export default App
