import React, {useState} from "react"
import TodoItem from "./TodoItem"
import TodoCounter from "./TodoCounter"
import TodoAdd from "./TodoAdd"
import "../sass/main.sass"

function TodoList() {
    
  const [todos, setTodos] = useState(
    [
      { id : 1, completed : false, title : "Купить воду" },
      { id : 2, completed : false, title : "Купить соль" },
      { id : 3, completed : false, title : "Купить хлеб" },
    ]
  )
  
  const [title, setTitle] = useState("1")
  const addNewPost = (title) => {
    const newPost = {
      id: Date.now(),
      completed: false,
      title: title,
    }
    setTodos([...todos, newPost])
  }

  const deleteTodo = (id) =>{
    console.log(id)
  }

  return(
    <div className="todo-list">
      <TodoCounter todos={todos} />
      <ul className="todo-list__ul">
        {
          todos.map(
            todo => <TodoItem  todo={todo} key={todo.id} deleteTodo={deleteTodo} />
          )
        }
      </ul>
      <TodoAdd value={title} setTitle={setTitle} addNewPost={addNewPost} />
    </div>
  )
}

export default TodoList;