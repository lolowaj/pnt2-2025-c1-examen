"use client";
import { useState, useEffect, use } from "react";

export default function PageDetails({params}){
    const {id} = use(params);
    const [pelicula, setPelicula] = useState([]);
    //acá quería hacer la página dinámica, pero no me dio el tiempo a ver como me traigo el valor de la otra página
    //const page = props.page
    const page = 1


    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=20&page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setPelicula(data.find(pelicula => pelicula._id == id));
            })
            .catch(error => console.log(error));
    }, [page]);
    
 
    return (
      <div>
        <img src={pelicula.poster} alt={pelicula.title} />
        <div>
          <h3>{pelicula.title}</h3>
          <h4>{pelicula.fullplot}</h4>
        </div>
      </div>
    );
    
         
}
