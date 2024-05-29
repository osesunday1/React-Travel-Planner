import { useState } from "react";
import Items from "./Items";

export default function PackingList({ addItem, setAddItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState('input');
  
  function deleteItem(id) {
    setAddItem(addItem.filter(item => item.id !== id));
  }

  let sortedItem

  if (sortBy === 'input') sortedItem = addItem
  if(sortBy === "description") {sortedItem= addItem.slice().sort((a,b)=> a.description.localeCompare(b.description))
  }
  if (sortBy === "packed"){sortedItem =addItem.slice().sort((a,b)=> Number(a.packed)- Number (b.packed))}


  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => (<Items 
          itemProp={item} 
          key={item.id} 
          deleteItem={deleteItem} 
          handleToggleItem={handleToggleItem} 
          />))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e => setSortBy(e.target.value))}>
            <option value="input"> Sort by input order</option>
            <option value="description"> Sort by description</option>
            <option value="packed"> Sort by packed status</option>
          </select>

        </div>
      </div>
    </>
  );
}
