import { useState } from "react";

export default function EspelhoDeTexto() {
    const[texto, setTexto]=useState("")

    return (
        <div>
            <br />
            <h2>Texto em tempo real</h2>
            <input onChange={(evento) => setTexto(evento.target.value)} />
            <p>Você digitou: {texto}</p>
        </div>
    )
}