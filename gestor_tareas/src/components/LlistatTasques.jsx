import React from 'react'
import { useState } from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';

function LlistatTasques(props) {

    const[tasques, setTasques]= useState([]);

    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca]; // Agafem les tasques actuals més la tasca que volem afegir
        setTasques(tasquesActuals);
        
        console.log(tasca)
    }

    const completarTasca = id => {
        let tasquesActuals = [...tasques]; // Agafem les tasques actuals
        let tasca = tasquesActuals.find(tasca => tasca.id === id); // Trobem la tasca amb el id passat per paràmetre
        tasca.completada = !tasca.completada; // Invertim el camp de completada
        const index = tasquesActuals.findIndex(tasca => tasca.id === id); // Agafem el index de la tasca a substituir
        tasquesActuals[index] = tasca; // Substituim la tasca per la nova
        setTasques(tasquesActuals);

        console.log(tasques)
    }
    


    const eliminarTasca = id => {
        setTasques([...tasques].filter((tasca) => tasca.id != id)); // Totes les tasques menys la que te el id passat
    }

    return (
        <>
            <h1>Llistat de Tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca} idTasca={tasques.length == 0 ? 0 : (tasques[tasques.length-1].id) + 1}/>

            {
                tasques.map((tasca) => (
                    <Tasca key={tasca.id} id={tasca.id} completada={tasca.completada} titol={tasca.titol} funcEliminarTasca={eliminarTasca} funcCompletarTasca={completarTasca}/>
                ))
            }
        </>
    )
}

export default LlistatTasques