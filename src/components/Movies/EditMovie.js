import React,{useEffect} from "react";
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "../Movies/Movies.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'bootstrap-4-react';


function EditMovie({movies,setMovie,name,setName,image,setImage,favorite,setFavorite,type,setType,relasedate,setRelasedate,onChangeDate,handleEditmovie,setMovieid}) {
  
    const { id } = useParams()
    setMovieid(()=>id)
    const location = useLocation();

    useEffect(() => {
         const {name,image,favorite,type,relasedate}= location.movies
         setName(name)
         setImage(image)
         setFavorite(favorite)
         setType(type)
         setRelasedate(relasedate)
     }, [location]);

    return (
        <Container>
        <section id="form">
        <h3>Edit Movie</h3>
        <form onSubmit={handleEditmovie}>
            
            <div className="formclass">
                <label htmlFor="name"  class="form-label">Movie Name </label>
                <input type="text" class="form-control" placeholder="Enter Movie Name" id="name" value={name} onChange={e => setName(e.target.value)} />
            
            
                <label htmlFor="about"  class="form-label">Image URL</label>
                <input type="text" class="form-control" placeholder="Image URL" id="about" value={image} onChange={e => setImage(e.target.value)} />
            
            
                <label htmlFor="about"  class="form-label">Favorite</label>
                <select className="form-select favclass"  class="form-control"  aria-label="Default select example" value={favorite} onChange={e=> setFavorite(JSON.parse(e.target.value))}>
                    
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <label htmlFor="about"  class="form-label">Type </label>
                <select className="form-select typeclass form-control" aria-label="Default select example" value={type} onChange={e=> setType(e.target.value)}>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Science fiction">Science fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Animation">Animation</option>
                    <option value="Thriller">Thriller</option>
                </select>

                <label htmlFor="about"  class="form-label">Release Date</label><br/>
                <DatePicker className="Datepicker form-control" 
                    //selected={relasedate}
                    dateFormat="MM/dd/yyyy"
                    //onChange={date => setRelasedate(date)}
                    onChange={onChangeDate}
                    value={relasedate}
                />
                
               
            </div>

          
            
            <button type="submit">Edit Movie</button>
        </form>
    </section>
    </Container>
    );
}

export default EditMovie;
