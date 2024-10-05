import React, { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const handleDelete = (id)=>{
    const indexToDelete = id.substr(id.length - 1)
    setItems(items.filter((item, index) => {
      return index != indexToDelete
    }))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem todoItem={todoItem} item={index} key={index} handleDelete={handleDelete}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
