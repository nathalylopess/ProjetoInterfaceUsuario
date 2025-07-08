import { use, useState } from "react";

export default function NomeSobrenome() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    const [mensagem, setMensagem] = useState('')


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert(`Your name is: ${nome} ${sobrenome}`)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMensagem(`Seu nome é: ${nome} ${sobrenome}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Nome:
                <input value={nome} onChange={(e) => setNome(e.target.value)} />
                Sobrenome:
                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>

            {mensagem && <p>{mensagem}</p>}
        </div>

    )
}