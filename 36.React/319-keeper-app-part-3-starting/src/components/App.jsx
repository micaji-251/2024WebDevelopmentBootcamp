import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  const handleAdd = (title, content)=>{
    setNotes([...notes,{title:title,content:content}])
  }
  
  const handleDelete = (title)=>{
    setNotes(notes.filter((note)=>note.title != title))
  }

  return (
    <div>
      <Header />
      <CreateArea handleAdd={handleAdd} />
      {notes.map((note, index)=>(
        <Note key={index} title={note.title} content={note.content} handleDelete={handleDelete} />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
