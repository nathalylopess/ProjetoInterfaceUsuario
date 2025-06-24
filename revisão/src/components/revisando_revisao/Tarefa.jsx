import './style.css'
import { useState } from 'react'

export default function Tarefa(){
    const [list, setLista]=useState([])
    const [item, setItem]=useState('')

    function Adicionar(){
        if ((item) !== ""){
            setLista([...list,item])
            setItem('')
        }
    }

    return(
        <div className='container'>
            <h2>Tarefa</h2>
            <p>Adicione nomes na lista</p>
            <input type="text" value={item} onChange={(evento)=> setItem(evento.target.value)} />
            <br />
            <button onClick={Adicionar}>Adicionar</button>
            <br />
            <br />
            <b>Lista</b>
            <ol>
                {list.map((nome)=>
                <li>
                    {nome}
                </li>
                )}
            </ol>
        </div>
    )
}