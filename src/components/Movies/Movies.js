import React,{useState, useEffect} from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";
import "../Movies/Movies.css"

const img_src = 'https://th.bing.com/th?id=OIP.J9DjjAB_23z9Fv_Y7czqHgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';


function Movies() {

    const [movies, setMovie] = useState([])
  
  useEffect(() => {
      fetch("http://localhost:3001/movies")
        .then(r => r.json())
        .then(data => setMovie((movies)=> movies= data))
  }, [])

  //console.log( movies)



  //debugger

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
                const updatedRecords = movies.map(record => {
                if (record.id === parseInt(id,10)) {
                    return { ...record, 'favorite': isfavorite };
                }
                return record;
                });
                setMovie((movies)=> movies=updatedRecords)
            })
            .catch(error => console.log(error));
  }

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
