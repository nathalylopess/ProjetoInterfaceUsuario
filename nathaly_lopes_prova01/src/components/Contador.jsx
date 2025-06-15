import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0)
    // Aqui eu armazeno a variável contador com valor zero e irei alterá-la através do setContador


    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button style={{ backgroundColor: contador > 10 ? "green" : "black" }} onClick={() => setContador(contador + 1)} > Incrementar </button>
            {/* Aqui eu faço um if e else para caso o valor de contador seja maior que dez, o backgroundColor será verde, senão, será preto */}
            {/* Para o onClick a lógica é a seguinte: utilizo o setContador para fazer as alterações no contador e no botão de incrementar, eu adiciono 1, no botão decrementar, subtraio 1 */}
            <button style={{ backgroundColor: contador < 0 ? "red" : "black" }} onClick={() => setContador(contador - 1)} > Decrementar</button>

        </div>
    )

}