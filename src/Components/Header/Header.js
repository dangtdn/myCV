import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderIntro from './HeaderIntro'

export default function Header() {
    return (
        <div>
            <HeaderIntro />
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 d-flex justify-content-center">
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa fa-angle-double-down"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 m-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/aboutme"><span>About Me</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/myskills"><span>My Skills</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/experience"><span>Experience</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/education"><span>Education</span></NavLink>
                        </li>
                        <li className="nav-item download ml-lg-3">
                            <a href="" target="_blank" className="nav-link">
                                <div className="download-profile-btn">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA2CAYAAACFrsqnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgB7ZhPboJAFMY/kI273qB0aWLSegM9gicoN6g9gXCS0hu0J6i9gYlGXXIEd+pC6XsVu2gAmT/gaOaXEIwzA3wM8755z4Fmlsvl2HGcUZqmdyXdwk6nE0EjLvQTnhEBFgrN1CHkLOeEynARIXVghZiGFWIaVohpWCGmYYWYhhViGlaIaVghpmGFmMbNCHEgyGq1eqHiwVNJlwDViIsa9vv9d7fbjSGAkJDZbNb3PO8LzTCg2tekamehT4tEwFSEhGRvSGuFsIBIZDYY4TXCLBaLmKqFz6iHdxIRQBCpqLXb7UYkZArN8DW3261UOVVqRhgqVvt04oXvQw8Jjgs8gQTSQhiNYhIoiGCUDJFvTDF/SJ/EGpLwWL6GighG2dnJuKZkkK+QhMfyNaCIli0Kvc0YcmE5ysYqo7RG/kNrJqTTuGJ3FhFCE1qFMBU9RsoryvDm83mQ19BqtRJRd2XYY9rt9mPRxpK9YrPZSHkFzXifAoOf1+bRA78VjIvpmECQXq+3phsOkR+WExI45D6QgMYG9Ly5s11LPpKF0gGO/nDi9z/VMFtEbYnVyWPoZ6LLK8qodV+e+cMDGsDm7KZhhZjGzQgpi1p+ketfCgrj94Vt5MIpbgC7RkzDVUlTTYE1uIfD4RNXDu2KP9y6alQNMqEj+ssQOWmBvhpVI9COenoqXPwAC860nvrNGEEAAAAASUVORK5CYII=" alt="download icon" className="icon" />
                                    <p>Download CV</p>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
