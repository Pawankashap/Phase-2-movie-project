import React,{useState, useEffect} from "react";
import { Card,Button } from 'bootstrap-4-react';
import { useHistory } from 'react-router-dom';
import "../Moviescard/Moviecard.css"
import myImage from '../../Images/star-filled.png'
import AddnewMovie from '../Addnew/AddnewMovie'
import EditMovie from "../Movies/EditMovie";
import ReactDOMServer from 'react-dom/server';


//  '../assets/myImage.png';

const img_src = 'https://th.bing.com/th?id=OIP.J9DjjAB_23z9Fv_Y7czqHgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';


function Moviescard({id,name,image,favorite,relasedate,type,movies,setMovie}) {
  
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();

  const toggleFavorite = () => {
    //console.log(isFavorite)
    favorite=(!isFavorite)
    console.log('state value ' + favorite)
    setIsFavorite(!isFavorite);
  };

  const handleClick = (e) => {
       //console.log(movies)
       history.push({pathname:`/editmovie/${e.target.id}`,movies,setMovie}); // Specify the path to redirect to
       setShowPopup(true);
    
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
        <Card.Footer className= "text-center">
          {/* <Card.Link className="float-left" href="#">Edit</Card.Link> */}
          <button  className="float-left btn"  id={id} onClick={handleClick}>Edit</button>
      

          <Card.Link  href="#">Delete</Card.Link>
          <img 
          className="float-right"
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
