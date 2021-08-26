import React from "react"

function TodoCounter({todos}) {
  
  return(
    <h1 className="todo-counter">All todos: {todos}</h1>
  )
}

export default TodoCounter