import React,{useEffect} from "react";
import "../Addnew/AddnewMovie.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'bootstrap-4-react';


function AddnewMovie({name,setName,image,setImage,favorite,setFavorite,type,setType,relasedate,setRelasedate,handleAddmovie,onChangeDate}) {
    useEffect(() => {
        setName('')
        setImage('')
        setFavorite(false)
        setRelasedate(new Date())
        setType('')
        
    }, [])

        return (
        <Container>
        <section id="form">
        <h3>Add Movie</h3>
        <form onSubmit={handleAddmovie}>
            
            <div className="formclass">
                <label htmlFor="name" className="form-label">Movie Name</label>
                <input type="text" className="form-control" placeholder="Enter Movie Name" id="name" value={name} onChange={e => setName(e.target.value)} />
            
            
            
                <label htmlFor="about" className="form-label">Image URL</label>
                <input type="text" className="form-control" placeholder="Image URL" id="about" value={image} onChange={e => setImage(e.target.value)} />
            
            
                <label htmlFor="about" className="form-label">Favorite</label>
                <select className="form-select favclass1" class="form-control"  aria-label="Default select example" value={favorite} onChange={e=> setFavorite(JSON.parse(e.target.value))}>
                    
                    <option value= 'true'>Yes</option>
                    <option value='false'>No</option>
                </select>

             
                
                <label htmlFor="about" className="form-label">Type </label>
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


                <label htmlFor="about" className="form-label">Release Date:</label> <br/>
                <DatePicker className="Datepicker form-control"
                    //selected={relasedate}
                    dateFormat="MM/dd/yyyy"
                    //onChange={date => setRelasedate(date)}
                    onChange={onChangeDate}
                    value={relasedate}
                />
            </div>

          
            
            <button type="submit">Add Movie</button>
        </form>
    </section>
    </Container>
    );
}

export default AddnewMovie;
