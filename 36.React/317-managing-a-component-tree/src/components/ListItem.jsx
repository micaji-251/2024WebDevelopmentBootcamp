import React, { useState } from 'react'

const ListItem = (props) => {
    const {todoItem, item} = props
    const [activeLine, setActiveLine] = useState(false)

    const handleClick = (e)=>{
        const {id} = e.target

        if(activeLine === false){
            document.getElementById(id).style.textDecoration = "line-through"
            setActiveLine(true)
        } else {
            document.getElementById(id).style.textDecoration = "none"
            setActiveLine(false)
        }
        
        
    }
  return (
    <li onClick={handleClick} id={`todoItem ${item}`}>{todoItem}</li>
  )
}

export default ListItem