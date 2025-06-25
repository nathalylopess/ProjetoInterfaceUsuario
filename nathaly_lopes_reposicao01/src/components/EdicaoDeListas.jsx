import { carros } from './dado_carros.js'
import { useState } from "react";

import './style.css'

export default function EdicaoDeListas() {

    const [listaCarros, setListaCarros] = useState(carros)
        // Armazeno a lista "carros" (a que eu importei do js) na constante "listaCarros" para fazer as alterações com o filter
    
        function filtrar() {
            // Crio a função "filtrar" para poder filtrar apenas os carros com ano inferior a 2020
            const novaListaCarros = listaCarros.filter((carro) => carro.ano < 2020)
            // crio uma nova constante que vai ser a que eu vou fazer a filtragem
            // nela uso o filter e se o "carro" da "listaCarros" (que equivale a lista "carros" que foi importada)
            // se o carro.ano for menor que 2020 ela permanecerá na "listaCarros"
            setListaCarros(novaListaCarros) 
            // acima eu apenas mudo a constante "listaCarros" para a lista que eu acabei de criar: "novaListaCarros"
        }
    return (
        <div className='container'>
        <h1>Edição de Listas</h1>
        <h2>Todos os carros</h2>
                    <ol>
                        {carros.map((carro) =>
                            <li>Modelo: {carro.modelo} | Cor: {carro.cor}| Ano: {carro.ano}</li>
                        )}
                        {/* utilizo o map para mostrar apenas o modelo, a cor e o ano de cada carro da lista "carros" */}
                        {/* ela mostra cada carro da lista  */}
                    </ol>

        <h2>Carros Modelo inferior a 2020</h2>
            <button onClick={filtrar} >Filtrar</button>
            {/* aqui eu faço a ação de filtrar a lista, ou seja, até o momento, nada tinha sido alterado
            porque a função ainda não havia sido chamada */}

            <ol>
                {listaCarros.map((carro) =>
                    <li>Modelo: {carro.modelo} | Ano: {carro.ano} | Cor {carro.cor} </li>
                )}
                {/* aqui ela mostra todos os carros da lista que eu filtrei mais acima */}
            </ol>
        </div>
    )
}