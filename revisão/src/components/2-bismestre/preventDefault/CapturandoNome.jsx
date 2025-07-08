import { useState } from "react";

export default function MeuFormulario() {
    const [aux, setAux] = useState('')


    
    const handleSubmit = e => {
        e.preventDefault()
        alert(`Seu nome é: ${aux}`)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={aux} onChange={(e) => setAux(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}