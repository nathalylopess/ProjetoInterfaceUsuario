import { useState } from "react"

export default function FiltrarNomes() {
    const [lista, setLista] = useState(["Ana", "João", "Pedro", "Amanda", "Carlos"])
    const [listAntiga, setListAntiga] = useState(lista)

    function filtrar() {
        const novaLista = lista.filter((item, index) => item.startsWith("A"))
        setLista(novaLista)
    }

    return (
        <div>
            <br />
            <h2>Filtrando</h2>
            <ul>

                {listAntiga.map((item, index) =>
                    <li key={index}>{item}</li>
                )}

            </ul>
            <button onClick={(filtrar)} >Filtrar</button>
            <ul>

                {lista.map((item, index) =>
                    <li key={index}>{item}</li>
                )}

            </ul>
        </div>
    )
}