

function Items({ itemProp, deleteItem, handleToggleItem }) {
  return (
    <>
      <li><input type="checkbox" value={itemProp.packed} onChange={() => handleToggleItem(itemProp.id)} />
        <span style={itemProp.packed ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{itemProp.quantity} {itemProp.description}</span> <button onClick={() => deleteItem(itemProp.id)}>❌</button></li>
    </>
  );
}


export default Items;