import { Link } from "react-router-dom";
import { db } from "../assets/config/config";
import { collection, addDoc } from "@firebase/firestore";
import { useState } from 'react'

const MoviesAdd = () => {

    const movie = {
        titol: '',
        descripcio: '',
        director: '',
        anio: '',
        imatge: '',
        nota: 1,
    }
    const [formData, setFormData] = useState(movie);

    const handleOnChange = (e)=>{
        const { name, value} = e.target;
        console.log(`aquest es el name ${name} i aquest es el value ${value}`)
        setFormData({ ...formData, [name]: value });
    };
     //setejar valors 
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const doc = await addDoc(collection(db, "pelicules"), formData);
            setFormData(movie);
           
        }catch (err){
            console.log("Problema al afegir pel·licula", err);
        }

    };

    return (
        <>
            <div className="afegir_peli">
            <h1> Afegeix una pel·lícula </h1>
            
            <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="titol"> Titol</label><br></br>
                <input type="text" name="titol" value={formData.titol} onChange={handleOnChange}></input>
                
            </div>
            <div>
                <label htmlFor="descripcio"> Descripció</label><br></br>
                <input type="text" name="descripcio" value={formData.descripcio} onChange={handleOnChange}></input>
                
            </div>
            <div>
                <label htmlFor="director"> Director </label><br></br>
                <input type="text" name="director" value={formData.director} onChange={handleOnChange}></input>
                
            </div>
            <div>
                <label htmlFor="anio"> Any</label><br></br>
                <input type="text" name="anio" value={formData.anio} onChange={handleOnChange}></input>
                
            </div>
            <div>
                <label htmlFor="imatge"> Imatge</label><br></br>
                <input type="text" name="imatge" value={formData.imatge} onChange={handleOnChange}></input>
                
            </div>
            <div>
                <label htmlFor="nota"> Nota (1-5)</label><br></br>
                <input type="number" name="nota" min="1" max="5" value={formData.nota} onChange={handleOnChange}></input>
                
            </div>
                
                <button type="submit"> Afegir</button>
            </form>
            <Link to = "/"> <button>Torna enrere</button> </Link>
            </div>
           
        </>
    )
}

export default MoviesAdd;