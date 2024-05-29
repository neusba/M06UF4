import { Link } from "react-router-dom";
import { collection, getDocs, query, doc, deleteDoc } from "@firebase/firestore";
import { db } from "../assets/config/config";
import { useState, useEffect } from 'react';
import MovieCard from "../components/MovieCard";
import './IndexMenu.css'

const MoviesList = () => {
    const [movies, setMovies] = useState([]);//Setegem la llista inicialment buida

    const handleDelete = async (id) => {
        console.log(id)
        const confirmation = window.confirm("Estàs segur que vols eliminar aquesta pel·lícula?");

  if (confirmation) {
    try {
      
      const moviesRef = collection(db, "pelicules");
      await deleteDoc(doc(moviesRef, id));

      
      alert("Pel·lícula eliminada amb èxit!");
      location.reload();
    } catch (error) {
      console.error(error);
      alert("Error a l'eliminar la pel·lícula: ", error.message);
    }
  }
      };

    useEffect(()=> {
        const getMoviesData = async() => {
            const pelis = await fetchPelicules(); //crida al metode que obté les pelicules de la bbdd de firestore
            setMovies(pelis);//modifiquem l'estat
        };
        getMoviesData();
    },[]);

    const fetchPelicules = async () => {
        const result = query(collection(db,"pelicules")); //cridem a la colecció que he creat que es diu pelicules
        const resultSnapshot = await getDocs(result); 
        const pelicules = [];
        resultSnapshot.forEach((doc)=>{
            pelicules.push({id:doc.id,...doc.data() });
        });

        return pelicules; //passem l'array
    };
    

    return (
        <>
            <h1> Llistat de pel·lícules </h1>
            <div className="llistatPelis">
            {movies.map((movie)=> (<div className= "CardPelicula"><MovieCard key={movie.id} {...movie} onDelete={handleDelete}/></div>))}
            </div>
            
            <Link to = "/"> <button>Torna enrere</button> </Link>
            
        </>
    )
}

export default MoviesList;