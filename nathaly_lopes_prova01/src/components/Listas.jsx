import { useState } from "react";
import { carros } from './dado_carros.js'

export default function Listas() {
    const [listaCarros, setListaCarros] = useState(carros)

    function filtrar() {
        const novaListaCarros = listaCarros.filter((carro) => carro.cor === "vermelho")
        setListaCarros(novaListaCarros)
    }

    return (
        <div>
            <h1>Lista de carros</h1>
            <h2>Todos os carros</h2>
            <ol>
                {carros.map((carro) =>
                    <li>Modelo: {carro.modelo} | Ano: {carro.ano}</li>
                )}
            </ol>
            <h2>Carros vermelhos</h2>
            <button onClick={filtrar} >Filtrar</button>

            <ol>
                {listaCarros.map((carro) =>
                    <li>Modelo: {carro.modelo} | Ano: {carro.ano} | Cor {carro.cor} </li>
                )}
            </ol>

        </div>
    )
}