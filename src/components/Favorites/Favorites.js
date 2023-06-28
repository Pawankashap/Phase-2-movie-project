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
            setMovie(filteredMovies)
          })
          .catch(error => console.log(error));
    }, [])
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

      const updatedRecords = movies.map(record => {
        if (record.id === parseInt(id,10)) {
            return { ...record, 'favorite': isfavorite };
        }
        return record;
        });
        console.log(updatedRecords)
        setMovie(()=> updatedRecords)
        console.log(movies)

      // fetch(`http://localhost:3001/movies/${id}`, {
      //     method: 'PATCH',
      //     headers: {
      //        Accept: "application/json",
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         favorite:isfavorite
      //     })
      //   })
      //     .then(response => response.json())
      //     .then(data => {
      //         const updatedRecords = movies.map(record => {
      //         if (record.id === parseInt(id,10)) {
      //             return { ...record, 'favorite': isfavorite };
      //         }
      //         return record;
      //         });
      //         setMovie(()=> updatedRecords)
      //     })
      //     .catch(error => console.log(error));

  // const updatedMovieRecords = movies.filter(movie => movie.favorite !== JSON.parse(false));
  // setMovie(updatedMovieRecords);
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
          <h2>Favorite Movies</h2>
          <Container fluid className='gx-0'>
          <div id="movies-list" >{movieDetails}</div>
          </Container>
          </section>
      );
}

export default Favorites;
