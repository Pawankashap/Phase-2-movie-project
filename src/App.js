// import './App.css';
import React, { useState,useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies"
import Favorites from "./components/Favorites/Favorites"
import AddnewMovie from "./components/Addnew/AddnewMovie"
import Home from "./components/Home/Home"
import EditMovie from "./components/Movies/EditMovie";


function App() {
    const [movies, setMovie] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/movies")
          .then(r => r.json())
          .then(data => setMovie((movies)=> movies= data))
    }, [])
    console.log(movies)

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/movies/${id}`, {
        method: 'DELETE'
        })
            .then(response => {
             const updatedMovieRecords = movies.filter(movie => movie.id !== parseInt(id,10));
             setMovie(updatedMovieRecords);
          })
          .catch(error => console.log(error));
    
      };
      const handleFavorite=(id,isfavorite)=>{
        
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'PATCH',
            headers: {
               Accept: "application/json",
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favorite:isfavorite
            })
          })
            .then(response => response.json())
            .then(data => {
                console.log('before favorite update:  ',movies)
                const updatedRecords = movies.map(record => {
                if (record.id === parseInt(id,10)) {
                    return { ...record, 'favorite': isfavorite };
                }
                return record;
                });
                setMovie(()=>updatedRecords)
            })
            .catch(error => console.log(error));
            console.log('after favorite update:  ',movies)
  }

  return (
    <div>
    <NavBar />
    <Switch>

        <Route path="/movies">
            <Movies movies={movies} setMovie={setMovie} handleDelete={handleDelete} handleFavorite={handleFavorite}/>
        </Route>
        <Route  path="/addnewmovie">
            <AddnewMovie />
        </Route>
        <Route  path="/favorite">
            <Favorites movies={movies} setMovie={setMovie} handleDelete={handleDelete}  />
        </Route>
        <Route  path="/editmovie/:id">
            <EditMovie />
        </Route>
        {/* <Route path="/movies/:id">
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
