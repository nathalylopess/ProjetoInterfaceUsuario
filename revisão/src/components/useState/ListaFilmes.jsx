import { useState } from "react";

export default function ListaFilmes() {
    const [filmes, setFilmes] = useState("")
    const [lista, setLista] = useState([])

    function addFilme() {
        setLista([...lista, filmes])

    }

    function removeFilme(i) {
        const novaLista = lista.filter((item,index) => index !== i)
        setLista(novaLista)
    }

    return (
        <div>
            <br />
            <h2>Lista Filmes</h2>
            <input value={filmes} placeholder="Insira o Nome do Filme" onChange={(filme) => setFilmes(filme.target.value)} />
            <button onClick={addFilme} >Adicionar</button>
            <ul>

                {lista.map((item, index) => 
                    (<li key={index}>
                        <span>{item}</span>
                        <button onClick={() => removeFilme(index)} >Excluir</button>
                    </li>)
                )}

            </ul>
        </div>

    )
}