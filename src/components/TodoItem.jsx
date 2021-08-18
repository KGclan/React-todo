import React from "react"
import "../sass/components/_todoItem.sass"

function TodoItem({todo, deleteTodo}) {
  
  function remove(){
    return deleteTodo(todo.id)
  }

  return(
    <li className="todo-item">
      <input className="todo-item__checkbox" type="checkbox" />
      <p className="todo-item__p">{todo.title}</p>
      <button className="todo-item__button" onClick={remove}>&#10006;</button>
    </li>
  )
}

export default TodoItem;