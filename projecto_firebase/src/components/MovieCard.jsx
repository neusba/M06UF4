//TODO AFEGIR BOTO DELETE
import { useState, useEffect } from 'react';

import { db } from "../assets/config/config"; 
import "./Card.css";
const MovieCard = ({id,titol,descripcio,director,anio,imatge,nota, onDelete}) => {
    
console.log(id)


    return (
        <>
        <div className="CardPeli">
            <div className= "imatge_peli">
                <img src={imatge} alt={titol}></img>
            </div>
            <div className="info_peli">
                <h2><b>Titol: </b> {titol}</h2>
                <p><b>Descripció: </b> {descripcio}</p>
                <p><b>Director: </b> {director}</p>
                <p><b>Any: </b> {anio}</p>
                <p><b>Nota: </b>{nota}</p>
            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>

        </div>
            
        </>
    );
};

export default MovieCard;