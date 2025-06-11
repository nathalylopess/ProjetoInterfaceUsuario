import { useState } from "react"

export default function ListaTarefas() {
    const [tarefa, setTarefa] = useState("")
    const [lista, setLista] = useState([])

    function addTarefa() {
        setLista([...lista, tarefa])
        // setTarefa("")
    }

    function removeTarefa(id) {
        const newList = lista.filter((item, index) => index !== id)
        setLista(newList)
    }

    return (
        <div>
            <input type="text" onChange={(evento) => setTarefa(evento.target.value)} />
            <br />
            <button onClick={addTarefa}>Enviar</button>

            <p>Sua lista: {lista.join(", ")}</p>
            <ul>
                {lista.map((item, index) => (

                    <li key={index}>
                        {item}
                        <button onClick={() => removeTarefa(index)}>Apagar</button>
                    </li>
                ))}
            </ul >
        </div>
    )

}