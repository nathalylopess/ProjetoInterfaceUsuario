import { useState } from "react";

export default function CampoNome(){
    const [nome, setNome]=useState("")
    const [mostrar, setMostrar]=useState(false)

    return(
        <div>
            <br />
            <h2>Nome</h2>
            <input placeholder="Insira seu nome" onChange={(n) => setNome(n.target.value)} />
            <button onClick={() => setMostrar(true)}>Enviar</button>
            {mostrar && <p>Olá, {nome}</p>}
        </div>
    )
}