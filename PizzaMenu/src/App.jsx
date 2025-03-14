import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/images/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/images/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/images/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/images/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/images/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/images/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
      <ul className='pizzas'>
        {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
      </ul>
    </main>
  )
}

function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>R$ {props.pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  return <footer className='footer'>{isOpen ?
    (
      <p><b>{new Date().toLocaleTimeString()}</b>Wellcome, We are currently open!</p>) :
    (
      <p><b>{new Date().toLocaleTimeString()}</b>Sorry!! We are currently closed!</p>
    )}
    <button className='btn'>Order</button>
  </footer>
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
1 