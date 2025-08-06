import { useEffect } from "react"
import { useState } from "react"

export default function Intro(){
    const[contador,setContador]=useState(0)

    useEffect(()=> {
    document.title = `Você clicou ${contador} vezes`
},[contador]) //toda vez que o contador tiver seu valor alterado, o useEffect vai ser executado

    return(
        <div>
                <h2>Contador: {contador}</h2>
                <button onClick={() => setContador(contador + 1)}>clique aqui</button>
        </div>
    )

}

