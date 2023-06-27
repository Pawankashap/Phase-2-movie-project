import React,{useEffect} from "react";
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

function EditMovie({movies,setMovie}) {
    const { id } = useParams()
    const location = useLocation();

    useEffect(() => {
         console.log(location.movies); // result: 'some_value'
         console.log(location.movies.name); // result: 'some_value'
         console.log(location.setMovie); // result: 'some_value'
     }, [location]);
    
    return (
        <section id="home">
            <h1 style={{ color: "firebrick" }}>
            Edit Movie Page    {id}   
            </h1>
        </section>
    );
}

export default EditMovie;
