// Crie um componente que implemente uma tela login.
// O usuário deverá inserir duas informações: login e palavra-passe.
// Caso a palavra-passe digitada seja a correta, o background da tela deve mudar de cor.

// Palavra-passe: AlunoPIU

import { useState } from "react"
import "./style.css"

export default function Login() {
    const [word, setWord] = useState("")
    const [color, setColor] = useState("white")

    const handleSubmit = (event) => {
        event.preventDefault() // Se quiser que mude e fique 
        if (word === "AlunoPIU") {
            setColor("green")
        } else {
            setColor("white")
        }
    }

    return (
        <div className="container">
            <h2>Questão 01 - Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{backgroundColor: color}}className="caixa">
                    <div className="caixa-intra">
                        <label htmlFor="">Login:</label>
                        <input type="text" />
                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Palavra-passe:</label>
                        <input type="text" name="" onChange={(e) => setWord(e.target.value)} />
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </div>
    )
}