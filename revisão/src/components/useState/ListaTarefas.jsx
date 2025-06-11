import { useState } from "react"

export default function ListaTarefas() {
    const [tarefa, setTarefa] = useState("")
    const [lista, setLista] = useState([])

    function addTarefa() {
        setLista([...lista, tarefa])
        setTarefa("")
    }

    function removeTarefa(id) {
        const newList = lista.filter((item, index) => index !== id)
        setLista(newList)
    }

    return (
        <div>
            <br />
            <h2>Listando Tarefas</h2>
            <input type="text" onChange={(evento) => setTarefa(evento.target.value)} />
            <br /><br />
            <button onClick={addTarefa}>Enviar</button>

            {/* <p>Sua lista: {lista}</p> */}
            <ul>
                {lista.map((item, index) => (

                    <li style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderBottom: "1px solid #ccc",
                    }} key={index}>
                        <span  style={{ fontWeight: "bold"}} >{item}</span>
                        <button onClick={() => removeTarefa(index)}>Apagar</button>
                    </li>
                ))}
            </ul >
        </div>
    )

}