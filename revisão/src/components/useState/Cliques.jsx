import { useState } from "react";

export default function Cliques() {
    const [contador, setContador] = useState(0)

    return (
        <div>

            <br />
            <h2>Contagem de Cliques: {contador}</h2>
            <button onClick={() => setContador(contador + 1)} >Clique</button>
            <button onClick={() => setContador(0)} >Zerar</button>

        </div>
    )
}