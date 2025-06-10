import { useState } from "react";

export default function MostrarMensagem() {
    const[mostrar, setMostrar]= useState(false)

    return (

        <div>
            <br />
            <button onClick={() => setMostrar(!mostrar)}> {mostrar ? "Apagar Mensagem" : "Mostrar mensagem"} </button>
            <p>{mostrar ? "React é muito legal!" : ""} </p>
        </div>
    
    )
}