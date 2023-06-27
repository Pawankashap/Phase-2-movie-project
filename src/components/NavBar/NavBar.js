import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink className="title" exact to="/">Home</NavLink>
            <NavLink className="title" to="/movies">Movies</NavLink>
            <NavLink className="title" to="/favorite">Favorite Movies</NavLink>
            <NavLink className="title" to="/addnewmovie">Add New Movie</NavLink>
        </nav>
    );
}

export default NavBar;
