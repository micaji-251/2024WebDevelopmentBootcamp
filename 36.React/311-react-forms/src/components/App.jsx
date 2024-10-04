import React, { useState } from "react";

function App() {

  const [name, setName] = useState()
  const [heading, setHeading] = useState()

  const handleChange = (event)=>{
    event.preventDefault()
    setName(event.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setHeading(name)
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="What's your name?" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
