import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

function Header() {
  const style = {color: 'red', fontSize: "32px", textTransform:"uppercase"}
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>    
  )
}

function Menu() {
  return(
    <main className="menu">
      <h2>Our Menu</h2><Pizza/>
    </main>
  )
}

function Pizza(){
  return(
    <div>
      <img src="/public/images/pizzas/spinaci.jpg" />
      <h3>Pizza Spinacci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  if (isOpen) {
    return (
      <footer className='footer'>
        <p><b>{new Date().toLocaleTimeString()}</b> We are currently open!</p>
      </footer>
    )
  } else {
    return (
      <footer className='footer'>
        <p><b>{new Date().toLocaleTimeString()}</b> Sorry, we are closed.</p>
      </footer>
    )
  }


}


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Menu/>
        <Footer />
      </div>
    </>
  )
}

export default App
