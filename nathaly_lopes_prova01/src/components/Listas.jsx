import { useState } from "react";
import { carros } from './dado_carros.js'
// Importo carros do arquivo dados_carros.js

export default function Listas() {
    const [listaCarros, setListaCarros] = useState(carros)
    // Armazeno a lista "carros" (a que eu importei do js) na constante "listaCarros" para fazer as alterações com o filter

    function filtrar() {
        // Crio a função "filtrar" para poder filtrar apenas os carros vermelhos
        const novaListaCarros = listaCarros.filter((carro) => carro.cor === "vermelho")
        // crio uma nova contante que vai ser a que eu vou fazer a filtragem
        // nela uso o filter e se o "carro" da "listaCarros" (que equivale a lista "carros" que foi importada)
        // tiver a cor igual a "vermelho" ela permanecerá na "listaCarros"
        setListaCarros(novaListaCarros) 
        // acima eu apenas mudo a contante "listaCarros" para a lista que eu acabei de criar: "novaListaCarros"
    }

    return (
        <div>
            <h1>Lista de carros</h1>
            <h2>Todos os carros</h2>
            <ol>
                {carros.map((carro) =>
                    <li>Modelo: {carro.modelo} | Ano: {carro.ano}</li>
                )}
                {/* utilizo o map para mostrar apenas o modelo e o ano de cada carro da lista "carros" */}
                {/* ela mostra de cada carro da lista o mode e o ano  */}
            </ol>
            <h2>Carros vermelhos</h2>
            <button onClick={filtrar} >Filtrar</button>
            {/* aqui eu faço a ação de filtrar a lista, ou seja, até o momento, nada tinha sido alterado
            porque a função ainda não havia sido chamada */}

            <ol>
                {listaCarros.map((carro) =>
                    <li>Modelo: {carro.modelo} | Ano: {carro.ano} | Cor {carro.cor} </li>
                )}
                {/* aqui ela mostra todos os carros da lista que eu ciltrei masi acima */}
            </ol>

        </div>
    )
}