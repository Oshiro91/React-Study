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

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => {onToggleItem(item.id)}} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      break;
  }
  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => 
        <Item 
        item={item} 
        onDeleteItem={onDeleteItem} 
        key={item.id} 
        onToggleItem={onToggleItem} 
        />)}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
      </div>
    </div>
  )
}

function Stats({items}) {
  if (!items.length) return <p className='stats'>Start adding some items to your packing list 🚀</p>
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage ===100? 
        '🛫Congratulations! You are ready to Travel!🛫' : 
        `💼You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
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

  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  )
}

export default App
