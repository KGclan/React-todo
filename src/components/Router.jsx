import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import TodoList from "../pages/TodoList.jsx"
import About from "../pages/About.jsx"
import Nav from "./Nav.jsx"

function Router() {
  return(
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/todos">
          <TodoList />
        </Route>
        <Redirect to="/about" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router