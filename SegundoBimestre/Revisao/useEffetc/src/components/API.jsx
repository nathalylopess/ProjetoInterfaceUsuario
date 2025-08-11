import { useEffect } from "react"
import { useState } from "react"

export default function API(){
    const[usuario,setUsuario]=useState(null)

    useEffect(()=> {
        fetch('https://api.github.com/users/octocat').then((res)=> res.json()).then((data)=>setUsuario(data))
        // o primeiro converte para JSON e o segundo guarda na constante usuários

    },[])//executa só uma vez ao carregar

    return(
        <div>
            <h2>Exercício 3 — Buscar dados de uma API</h2>
            <b>Usuário do Github</b>
            {
                usuario ? (
                    <div>
                        <p>ID: {usuario.id} </p>
                        <p>Nome: {usuario.name} </p>
                        <p>Login: {usuario.login}</p>
                    </div>
                ) : (
                    <div>
                        <p>Carregando...</p>
                    </div>
                )
            }
        </div>
    )
}
