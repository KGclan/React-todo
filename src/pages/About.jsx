import React from "react"
import "../sass/components/_about.sass"

function About() {
    return(
        <div className="about">
            <h1 className="about__title">About my todo list</h1>
            <p className="about__body">This is my first React application! Please click on "TodoList" button.</p>
        </div>
    )
}

export default About