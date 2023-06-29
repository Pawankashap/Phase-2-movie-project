// import './App.css';
import React, { useState,useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies"
import Favorites from "./components/Favorites/Favorites"
import AddnewMovie from "./components/Addnew/AddnewMovie"
import Home from "./components/Home/Home"
import EditMovie from "./components/Movies/EditMovie";

let flagtype;
function App() {

    const [movies, setMovie] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/movies")
          .then(r => r.json())
          .then(data => setMovie((movies)=> movies= data))
    }, [])
   
    const [filteredMovies, setFilteredMovies] = useState([]) 
    
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/movies/${id}`, {
        method: 'DELETE'
        })
            .then(response => {
                const updatedMoviefilter = filteredMovies.filter(movie => movie.id !== parseInt(id,10));       
                setFilteredMovies(filteredMovies =>updatedMoviefilter)
                const updatedMovieRecords = movies.filter(movie => movie.id !== parseInt(id,10));   
                setMovie(movies=>updatedMovieRecords);    
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
                setMovie(()=>updatedRecords)
            })
            .catch(error => console.log(error));
    }

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [type, setType] = useState("Action");
    const [relasedate, setRelasedate] = useState(new Date());

    function handleAddmovie(e) {
        e.preventDefault()
        const formData = { name, image, favorite,type,relasedate }
        
        formData.relasedate=relasedate
        fetch('http://localhost:3001/movies', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
            setMovie([...movies, data])
            })
            .catch(error => console.log(error));
            cleartextbox()
    }


    const [movieid, setMovieid]= useState('')

    function handleEditmovie(e) {
        e.preventDefault()
        const formData = { name, image, favorite,type,relasedate }
        formData.relasedate=relasedate
        fetch(`http://localhost:3001/movies/${movieid}`, {
            method: 'PATCH',
            headers: {
               Accept: "application/json",
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
            .then(response => response.json())
            .then(newMovie => {
                const updatedRecords = movies.map(record => {
                if (record.id === parseInt(movieid,10)) {
                    return { ...record, ...formData};
                }
                return record;
                });
                setMovie(()=>updatedRecords)
            })
            .catch(error => console.log(error));
            cleartextbox()
    }

    const onChangeDate = (date) => {
        console.log("run on change date " , date)
        const selectdate=date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        setRelasedate(selectdate);
    };

    const cleartextbox=()=>{ 
        setName('')
        setImage('')
        setFavorite(false)
        setType("Action")
        setRelasedate(new Date())
    }

  return (
    <div>
    <NavBar />
    <Switch>

        <Route path="/movies">
            <Movies movies={movies} setMovie={setMovie} handleDelete={handleDelete} handleFavorite={handleFavorite}/>
        </Route>
        <Route  path="/addnewmovie">
            <AddnewMovie name={name} setName={setName} image={image} setImage={setImage} favorite={favorite} setFavorite={setFavorite} type={type} setType={setType} relasedate={relasedate} setRelasedate={setRelasedate} handleAddmovie={handleAddmovie} onChangeDate={onChangeDate}/>
        </Route>
        <Route  path="/favorite">
            <Favorites movies={movies} setMovie={setMovie} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} handleDelete={handleDelete} flagtype />
        </Route>
        <Route  path="/editmovie/:id">
            <EditMovie name={name} setName={setName} image={image} setImage={setImage} favorite={favorite} setFavorite={setFavorite} type={type} setType={setType} relasedate={relasedate} setRelasedate={setRelasedate} onChangeDate={onChangeDate} handleEditmovie={handleEditmovie} setMovieid={setMovieid} />
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
