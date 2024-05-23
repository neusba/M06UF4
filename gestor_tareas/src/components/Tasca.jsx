import React from 'react'
import { SlClose } from "react-icons/sl";
import { useState } from 'react';
import './Tasca.css';

function Tasca(props) {

    const[taskClass, setTaskClass]= useState('tascaNoCompletada');

    const eliminarTasca = () => {
        props.funcEliminarTasca(props.id);
    }

    const completarTasca = () => {
        props.funcCompletarTasca(props.id);
        props.completada == false ? setTaskClass('tascaCompletada') : setTaskClass('tascaNoCompletada');
    }
    
    return (
        <>
            <div id="tasca" className={taskClass}>
                <h2 onClick={completarTasca}>{props.titol}</h2><SlClose onClick={eliminarTasca}></SlClose>
            </div>
        </>       
    )
}

export default Tasca