import React from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";
import "../Movies/Movies.css"

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
