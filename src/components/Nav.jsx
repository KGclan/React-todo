import React from "react"
import { Link } from "react-router-dom"
import "../sass/components/_nav.sass"

function Nav() {
    return(
        <nav className="nav">
            <Link className="nav__item" to="/about">About</Link>
            <Link className="nav__item" to="/todos">TodoList</Link>
        </nav>
    )
}

export default Nav