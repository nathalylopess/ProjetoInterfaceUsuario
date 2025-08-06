import { useEffect } from "react"

export default function App(){
    useEffect(() =>{
        console.log("O componente foi montado")
    },[]) //array vazio -> executa só uma vez

    return <h2>Helo World</h2>
}