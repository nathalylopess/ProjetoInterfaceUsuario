import { useEffect, useState } from "react"

export default function Temporizador() {

    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((valorAnterior) => valorAnterior + 1)
        }, 1000)// esse 1000 é em milissegundos

        //limpando o efeito
        return () => clearInterval(intervalo)
        // Para parar o setInterval, usamos clearInterval(idDoIntervalo).
    }, []
    )

    return (
        <div>
            <h2>Exercício 4 — Temporizador com setInterval</h2>
            <p>Tempo: {segundos} segundos</p>
        </div>
    )
}