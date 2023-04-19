import React, { useState } from 'react';
import "./App.css"

const TodoApp = () => {

const  [newItem,setsNewItem] = useState("");
const  [items,setItems] =useState([]);
function addItem() {

if (!newItem) {
  alert("Enter an item");
  return;
}

  const item={
    id:Math.floor(Math.random()*1000),
    value:newItem
  };
  setItems(oldList =>[...oldList,item]);
  setsNewItem("");
  console.log(item)
}

function deleteItem(id){
  const newArray = items.filter(item =>item.id !==id)
  setItems(newArray)
}
  return (
    <div className='App'>
      <h1 className=' todo'>ToDo List</h1>
      <input className='add' type='text' placeholder='Add a new task... ' value={newItem}
      onChange={e => setsNewItem(e.target.value)}/>
      <button onClick={() => addItem()}>Add</button>
      <ol className='ol'>
        {items.map(item =>{
          return(
            <li key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)}>Delete</button></li>
          )
        })}
      </ol>
    </div>
  );
};

export default TodoApp;
