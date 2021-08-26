import React from "react"
import "../sass/components/_todoItem.sass"

function TodoItem({todo, deleteTodo, todoCompleted}) {

  const styles = []

  if(todo.completed) {
    styles.push("done")
  }

  return(
    <li className="todo-item">
      <input className="todo-item__checkbox" type="checkbox" onChange={ () => { return todoCompleted(todo.id) }} />
      <p className={styles.join(" ")}>{todo.title}</p>
      <button className="todo-item__button" onClick={ () => {return deleteTodo(todo.id)} }>&#10006;</button>
    </li>
  )
}

export default TodoItem