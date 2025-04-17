import './App.css'
import { useState } from 'react';

function Logo() {
  return <h1>🌴 Far Away 💼</h1>
}

function Form({onAddItems}) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSelect(e) {
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  function handleChange(e) {
    setDescription(e.target.value);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>
        What do you need for your 😍 trip?
      </h3>
      <select value={quantity} onChange={handleSelect}>
        {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={handleChange} />
      <button >Add</button>
    </form>
  )
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className='list'>
      <ul>
        {items.map(item => <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />)}
      </ul>
    </div>
  )
}

function Stats() {
  return (
    <footer className='stats'>
      <em>
        💼You have X items on your list, and you already packed X (X%)
      </em>
    </footer>
  )
}

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem (id) {
    console.log(id);
    setItems((items) => items.filter(item => item.id !== id));
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  )
}

export default App
