import './style.css'
import { useState } from "react";

export default function CampoTexto() {
    const[texto,setTexto]=useState('')

    return (
        <div className='container'>
            <h2>Texto interativo</h2>
            <input type="text" onChange={(evento) => setTexto(evento.target.value)} />
            <p>Texto: {texto}</p>
        </div>
    )
}