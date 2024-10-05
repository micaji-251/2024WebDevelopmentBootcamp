import React, { useState } from "react";

function CreateArea(props) {
  const {handleAdd} = props

  const [inputTitle, setTitle] = useState("")
  const [inputContent, setContent] = useState("")

  const handleChange = (e)=>{
    console.log(e);
    const {value, name}=e.target
    if(name==="title"){
      setTitle(value)
    }else if(name==="content"){
      setContent(value)
    }
    
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    const {title, content} = e.target.elements
    handleAdd(title.value, content.value)
    setTitle("")
    setContent("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={inputTitle} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputContent}  onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
