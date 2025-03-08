import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

function Header() {
  const style = { color: 'red', fontSize: "32px", textTransform: "uppercase" }
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name='Pizza Spinaci' ingridients='Tomato, mozarella, spinach, and ricotta cheese' photo='/images/pizzas/spinaci.jpg' price={15}/>
      <Pizza name='Pizza Margherita' ingridients='Tomato, mozarella' photo='/images/pizzas/margherita.jpg' price={10} />
    </main>
  )
}

function Pizza(props) {
  console.log(props)
  return (
    <div className='pizza'>
      <img src={props.photo} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingridients}</p>
        <span>{props.price}</span>
      </div>
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
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export default App
