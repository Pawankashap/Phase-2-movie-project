import React,{useState, useEffect} from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";
import "../Movies/Movies.css"

const img_src = 'https://th.bing.com/th?id=OIP.J9DjjAB_23z9Fv_Y7czqHgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';


function Movies({movies,setMovie,handleDelete,handleFavorite}) {
    
  const movieDetails = movies.map((movie) => (
    <Moviescard
        key={movie.id}
        id={movie.id}
        name={movie.name}
        image={movie.image}
        favorite={movie.favorite}
        relasedate={movie.relasedate}
        type={movie.type}
        movies={movie}
        setMovie={setMovie}
        handleDelete={handleDelete}
        handleFavorite={handleFavorite}

    />
     ))

    return (
        <section id="projects">
        <h2>All Movies</h2>
        <Container fluid className='gx-0'>
        <div id="movies-list" >{movieDetails}</div>
        </Container>
        </section>
    );
}

export default Movies;
