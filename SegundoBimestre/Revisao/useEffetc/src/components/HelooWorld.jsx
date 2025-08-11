import { useEffect } from "react"

export default function App(){
    useEffect(() =>{
        console.log("O componente foi montado")
    },[]) //array vazio -> executa só uma vez

    return (
    <div>
        <h2>Exercício 1 — Executar uma vez ao carregar o componente</h2>
        <h3>Helo World</h3>
    </div>
    )
}