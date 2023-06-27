// import './App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies"
import Favorites from "./components/Favorites/Favorites"
import AddnewMovie from "./components/Addnew/AddnewMovie"
import Home from "./components/Home/Home"
// import Home from "./Movies";
// import About from "./About";
// import ProjectList from "./ProjectList";
// import ProjectDetail from "./ProjectDetail";

function App() {
  return (
    <div>
    <NavBar />
    <Switch>

        <Route path="/movies">
            <Movies />
        </Route>
        <Route exact path="/addnewmovie">
            <AddnewMovie />
        </Route>
        <Route exact path="/favorite">
            <Favorites />
        </Route>
        {/* <Route path="/projects/:id">
            <Favorites />
        </Route> */}
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            <h1>404 not found</h1>
        </Route>
    </Switch>
</div>
  );
}

export default App;
