import React, {useState, useEffect} from "react"
import TodoItem from "../components/TodoItem"
import TodoCounter from "../components/TodoCounter"
import TodoAdd from "../components/TodoAdd"
import Pagination from "../components/Pagination"
import "../sass/main.sass"
import TodoServise from "../API/TodoServise"
import {getPageCount} from "../utils/pages"
import axios from "axios"

function TodoList() {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState(" ")
  const [totalPages, setTotalPages] = useState(0)
  const [limit] = useState(4)
  const [page, setPage] = useState(1)
  const [allTodos, setAllTodos] = useState(0)

  async function fetchTodos() {
    const response = await TodoServise.getAll(limit, page)
    setTodos(response.data)
    const totalCount = response.headers["x-total-count"]
    setTotalPages(getPageCount(totalCount, limit))
  }  

  async function fetchTodosCount() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setAllTodos(response.data.length)
  }
  
  useEffect(() => {
    fetchTodos()
  }, [page])

  useEffect( () => {
    fetchTodosCount()
    }, [])

  const addNewPost = (title) => {
    const newPost = {
      id: Date.now(),
      completed: false,
      title: title,
    }
    setTodos([...todos, newPost])
    setTitle(" ")
    setAllTodos(allTodos + 1)
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => id !== todo.id))
    setAllTodos(allTodos - 1)
  }

  const changePage = (page) => {
    setPage(page)
  }

  const todoCompleted = (i) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === i) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return(
    <div className="todo-list">
      <TodoCounter todos={allTodos}/>
      <ul className="todo-list__ul">
        { 
          todos.length
            ? todos.map(
                todo => 
                  <TodoItem  
                    todo={todo} 
                    key={todo.id} 
                    deleteTodo={deleteTodo} 
                    todoCompleted={todoCompleted}
                  />
              )
            :
              <p className="ul__clean">Add todo</p>
        }
      </ul>
      <TodoAdd 
        value={title} 
        setTitle={setTitle} 
        addNewPost={addNewPost} 
      />
      <Pagination 
        changePage={changePage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  )
}

export default TodoList