import './style.css'
import { useState } from 'react'

export default function ListaNomes() {
    const nomes =['Alice', 'Bruno', 'Carla']
    const [listNomes,setListNomes]=useState(nomes)

    function Filtrar(){
        const novoListNomes = listNomes.filter((nome) => nome.startsWith('A'))
        setListNomes(novoListNomes)
    }
    return (
        <div className='container'>
            <h2>Lista de Nomes</h2>
            <ol>
                {nomes.map((nome) =>
                <li>
                    {nome}
                </li>)
                }
            </ol>
            <p>componente filter</p>
            <button onClick={Filtrar} >Filtrar</button>
            <ul>
                {listNomes.map((nome)=>
                <li>
                    {nome}
                </li>
                )}
            </ul>
        </div>
    )

}