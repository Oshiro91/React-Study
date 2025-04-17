import { useState } from 'react';
import { Item } from './modules/Item';

export function PackingList({ items, onDeleteItem, onToggleItem, onDeleteAllItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  function clearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) {
      onDeleteAllItems();
    }
  }
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
        {sortedItems.map(item => <Item
          item={item}
          onDeleteItem={onDeleteItem}
          key={item.id}
          onToggleItem={onToggleItem} />)}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
