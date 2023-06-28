import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "../Movies/Movies.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'bootstrap-4-react';

function AddnewMovie({movies,setMovie}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [relasedate, setRelasedate] = useState(new Date());

   
     function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            movie: { name, image, favorite,relasedate }
        }
        formData.movie.relasedate=relasedate
        console.log(formData)
    }
    
    const handleDate = (date) => {
        const selectdate=date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        setRelasedate(selectdate);
      };

    return (
        <Container>
        <section id="form">
        <h3>Add Movie</h3>
        <form onSubmit={handleSubmit}>
            
            <div className="mr-4 pr-4">
                <label htmlFor="name">Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                
                <label htmlFor="about">Image URL:</label>
                <input type="text" id="about" value={image} onChange={e => setImage(e.target.value)} />
            </div>
            <div  className="mr-4 pr-4">
                <label htmlFor="about">favorite:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select class="form-select" aria-label="Default select example" value={favorite} onChange={e=> setFavorite(e.target.value)}>
                    
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <label htmlFor="about">Movie Release Date:</label>
                <DatePicker className="Datepicker" 
                    //selected={relasedate}
                    dateFormat="MM-dd-yyyy"
                    //onChange={date => setRelasedate(date)}
                    onChange={handleDate}
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
