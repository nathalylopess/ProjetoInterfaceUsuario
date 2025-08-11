import { useEffect } from "react"
import { useState } from "react"

export default function Intro(){
    const[contador,setContador]=useState(0)

    useEffect(()=> {
    document.title = `Você clicou ${contador} vezes`
},[contador]) //toda vez que o contador tiver seu valor alterado, o useEffect vai ser executado

    return(
        <div>
                <h2>Exercício 2 — Atualizar título da aba com base no estado</h2>
                <b>Contador: {contador}</b>
                <br />
                <button onClick={() => setContador(contador + 1)}>clique aqui</button>
        </div>
    )

}

