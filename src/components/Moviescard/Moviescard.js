import React,{useState} from "react";
import { Card} from 'bootstrap-4-react';
import { useHistory } from 'react-router-dom';
import "../Moviescard/Moviecard.css"
import myImage from '../../Images/star-filled.png'

function Moviescard({id,name,image,favorite,relasedate,type,movies,setMovie,handleDelete,handleFavorite}) {
  
  const [isFavorite, setIsFavorite] = useState(favorite);
  const history = useHistory();

  const toggleFavorite = (e) => {
    console.log(isFavorite)
    setIsFavorite(()=>!isFavorite);
    handleFavorite(e.target.id,!isFavorite)
  };

  const Editmovie = (e) => {
       history.push({pathname:`/editmovie/${e.target.id}`,movies,setMovie}); 
  };
  const Deletemovie=(e)=>{
    handleDelete(e.target.id,'favdel')
  }

    return (
        
      <React.Fragment>
        <Card display="inline-block" align="top" mr="4" style={{ width: '18rem' }}>
        <Card.Header>{name}</Card.Header>
        <Card.Image className="setimagesize" src={image} />
        <Card.Body>
          <Card.Title>Movie Type: {type}</Card.Title>
          <Card.Subtitle mb="2" text="muted">Release Date: {relasedate}</Card.Subtitle>
          <Card.Text>{favorite}</Card.Text>
        </Card.Body>
        <Card.Footer className= "text-center">
          <button  className="float-left btn"  id={id} onClick={Editmovie}>Edit</button>
          <button  className="btn"  id={id} onClick={Deletemovie}>Delete</button>
          <img 
            className="float-right"
            id={id}
            src={myImage}
            alt={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            onClick={toggleFavorite}
            style={{ filter: isFavorite ? 'none' : 'grayscale(100%)' }} // Conditional styling
          />
          <div className="d-flex justify-content-between">
          </div>
        </Card.Footer>
       </Card>
      </React.Fragment>
    
    );
}

export default Moviescard;
