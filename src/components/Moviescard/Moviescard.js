import React,{useState, useEffect} from "react";
import { Card,Button } from 'bootstrap-4-react';
import "../Moviescard/Moviecard.css"

const img_src = 'https://th.bing.com/th?id=OIP.J9DjjAB_23z9Fv_Y7czqHgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';


function Moviescard({id,name,image,favorite,relasedate,type}) {
  
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    console.log(isFavorite)
    favorite=(!isFavorite)
    console.log('state value ' + favorite)
    setIsFavorite(!isFavorite);
  };

  


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
        <Card.Footer>
          <Card.Link className="ms-3" href="#">Edit</Card.Link>
          <Card.Link className="me-3" href="#">Delete</Card.Link>
          <button onClick={toggleFavorite}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <div className="d-flex justify-content-between">
        </div>
        </Card.Footer>
      </Card>
      </React.Fragment>
    
    );
}

export default Moviescard;
