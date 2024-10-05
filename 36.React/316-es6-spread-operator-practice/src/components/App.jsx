import React, { useState } from "react";

function App() {
  const [list, setList] = useState([])

  const handleSubmit =(e) =>{
    e.preventDefault()
    const {activityInput} = e.target.elements
    let activity = activityInput.value
    
    setList([...list, activity])

    e.target.elements.activityInput.value = ""
  }
  console.log(list);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="activityInput" />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {list.map((item)=>(
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
