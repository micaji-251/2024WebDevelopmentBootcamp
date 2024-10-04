import React, { useState } from "react";

function App() {


  const [fname, setFname] = useState("")
  const [lName, setLname] = useState("")

  const handleSubmit = (event)=>{
    event.preventDefault()

    console.log(event);
    const {fName, lName} = event.target.elements
    
    setFname(fName.value)
    setLname(lName.value)
  }
  console.log(fname, lName);
  return (
    <div className="container">
      <h1>Hello {fname} {lName}</h1>
      <form onSubmit={handleSubmit}>
        <input name="fName" placeholder="First Name" />
        <input name="lName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
