import React,{useState, useEffect} from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";
import "../Movies/Movies.css"

function Favorites({movies,setMovie,handleDelete}) {
    const [filteredMovies, setFilteredMovies] = useState([])
    useEffect(() => {
      setFilteredMovies(movies.filter(movie => movie.favorite === true));
  }, [])

  const handleFavorite=(id,isfavorite)=>{
    const updatedRecords = filteredMovies.map(record => {
      if (record.id === parseInt(id,10)) {
          return { ...record, 'favorite': isfavorite };
      }
      return record;
      });
    const updatedRecordsmovies = movies.map(record => {
        if (record.id === parseInt(id,10)) {
            return { ...record, 'favorite': isfavorite };
        }
        return record;
    });
      
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
            setMovie(updatedRecordsmovies)
            setFilteredMovies(filteredMovies=>updatedRecords.filter(movie => movie.favorite === true))
        })
        .catch(error => console.log(error));
}

    const movieDetails = filteredMovies.map((movie) => (
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
          <h2>Favorite Movies</h2>
          <Container fluid className='gx-0'>
          <div id="movies-list" >{movieDetails}</div>
          </Container>
          </section>
      );
}

export default Favorites;
