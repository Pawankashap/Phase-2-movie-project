import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/favorite">Favorite Movies</NavLink>
            <NavLink to="/addnewmovie">Add New Movie</NavLink>
        </nav>
    );
}

export default NavBar;
