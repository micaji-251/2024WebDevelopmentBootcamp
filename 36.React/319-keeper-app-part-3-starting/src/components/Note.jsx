import React from "react";

function Note(props) {
  const {handleDelete,title,content}=props

  const handleClick = (e)=>{
    handleDelete(title)
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
