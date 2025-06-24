import { useState } from "react";
import './style.css'

export default function ContadorSimples() {
    const[contador,setContador]=useState(0)
    return (
        <div className="container">
            <h2>Contador</h2>
            <p>Número de cliques: {contador}</p>
            <button onClick={() => setContador(contador+1)}>Clique</button>
        </div>
    )


}