import React, {useState} from "react"
import "../sass/components/_todoadd.sass"

function TodoAdd({value, setTitle, addNewPost}) {

  function addPost(e){
    e.preventDefault()
    return addNewPost(value)
  }

  return(
  <form className="todo-add">
    <input 
      className="todo-add__input" 
      type="text"
      value={value}
      onChange={e => setTitle(e.target.value)}
      />
    <button className="todo-add__button" type="submit" onClick={addPost}>Добавить</button>
  </form>
  )
}

export default TodoAdd;