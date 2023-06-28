import React,{useState, useEffect} from "react";
import { Container } from 'bootstrap-4-react';
import Moviescard from "../Moviescard/Moviescard";
import "../Movies/Movies.css"

function Favorites() {
    const [movies, setMovie] = useState([])
  
    useEffect(() => {
        fetch("http://localhost:3001/movies")
          .then(r => r.json())
          .then(data => {
            const filteredMovies = data.filter(movie => movie.favorite === true);
            setMovie(()=>filteredMovies)
          })
          .catch(error => console.log(error));
    }, [])
  
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
