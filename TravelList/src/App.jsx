import './App.css'
import useState from 'react';
import Logo from './modules/Logo';
import Form from './modules/Form';
import PackingList from './modules/PackingList';
import Stats from './modules/Stats';

function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }
  function handleDeleteAllItems(){
    setItems([]);
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
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onDeleteAllItems={handleDeleteAllItems} />
      <Stats items={items} />
    </div>
  )
}

export default App
