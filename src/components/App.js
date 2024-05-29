import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const books = [1,2,3,4,5,6,7,8]

const test1 = books.filter(book=> book>5)
console.log(test1)


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 8, packed: false },
];


function App() {
  const [addItem, setAddItem]= useState(initialItems)

  function passInItem(ai){
  setAddItem(()=>[...addItem, ai])
   }

   function handleToggleItem(id){
    setAddItem(()=> addItem.map(item=> item.id === id? {...item, packed: !item.packed} : item))
   }


  return(
    <> 
  <div className="app">  
  <Logo />
  <Form onPassInItem= {passInItem} addItem={addItem}/>
  <PackingList addItem = {addItem} setAddItem={setAddItem} handleToggleItem={handleToggleItem}/>
  <Stats addItem={addItem}/>
  </div>
  </>
  )
}







export default App;
