import { useState } from 'react';

export function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  function handleSelect(e) {
    setQuantity(Number(e.target.value));
  }

  function handleSubmit(e) {
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
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}
