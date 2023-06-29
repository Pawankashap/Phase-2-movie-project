import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "../Addnew/AddnewMovie.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from 'bootstrap-4-react';


function AddnewMovie({name,setName,image,setImage,favorite,setFavorite,type,setType,relasedate,setRelasedate,handleAddmovie,onChangeDate}) {
    // const [name, setName] = useState("");
    // const [image, setImage] = useState("");
    // const [favorite, setFavorite] = useState(false);
    // const [type, setType] = useState("Action");
    // const [relasedate, setRelasedate] = useState(new Date());

    useEffect(() => {
        setName('')
        setImage('')
        setFavorite(false)
        setRelasedate(new Date())
        setType('')
       
    }, [])
   
    //  function handleAddmovie(e) {
    //     e.preventDefault()
    //     const formData = { name, image, favorite,type,relasedate }
        
    //     formData.relasedate=relasedate
    //     console.log(formData)
    //     fetch('http://localhost:3001/movies', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //       })
    //         .then(response => response.json())
    //         .then(data => {
    //           // Handle the response data
    //           console.log(data);
    //         })
    //         .catch(error => console.log(error));
    // }
    
    // const onChangeDate = (date) => {
    //     const selectdate=date.toLocaleDateString('en-GB', {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric'
    //       })
    //     setRelasedate(selectdate);
    //   };

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
