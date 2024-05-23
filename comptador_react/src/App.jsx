import React from "react";
import Comptador from "./components/Comptador";
import Boton from "./components/Boton";
import { useState } from "react";
import "./App.css"

function App() {

  const[numClics, setNumClics] = useState(0);

  return (
    <>
      <div className="contador">
        <Comptador numClics={numClics}/>
      </div>

      <div className="botones">
        <Boton text="Clic" onclick={incrementarNum} esClick={true}/>
        <Boton text="Reiniciar" onclick={reiniciarNum} esClick={false}/>
      </div>
    </>
  );

  function incrementarNum() {
    let clics = numClics+1;
    setNumClics(clics)
    console.log(clics)
  }

  function reiniciarNum() {
    let clics = 0;
    setNumClics(clics);
    console.log(clics);
  }
}

export default App