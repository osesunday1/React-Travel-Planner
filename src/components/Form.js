import { useState } from "react";

function Form({onPassInItem, addItem}){
    const [description, setDescriptions] = useState("")
    const[quantity, setquantity]= useState()
  
    function handleSubmit(e){
      e.preventDefault()
      if(!description) return
      const newItem = {description, quantity, packed: false, id: addItem.length + 1 } 
      console.log(newItem)
      onPassInItem(newItem)
  
      setDescriptions("")
      setquantity(0)
    }
    return(
      <>
      <form className="add-form" onSubmit= {handleSubmit}> 
      <h3>What do you need for your 😍 trip</h3>
      <select value={quantity} onChange={(e)=> setquantity(Number(e.target.value))}>{Array.from({ length: 20}, (_, i) => i + 1 ).map((num)=>(
      <option value={num} key={num}> {num} </option>))}    </select>
  
      <input type='text' placeholder="Item..." value={description} onChange={(e)=>(setDescriptions(e.target.value))}/>
      
      <button>Add</button>
      </form>
  
      </>
    )
  }

  export default Form;

  