import React from "react"

function TodoCounter(props) {

  function countTodos(){
    return props.todos.length
  }
  
  return(
    <h1 className="todo-counter">Всего задач: {countTodos()}</h1>
  )
}

export default TodoCounter;