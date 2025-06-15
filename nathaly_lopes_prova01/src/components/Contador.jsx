import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0)


    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button style={{ backgroundColor: contador > 10 ? "green" : "black" }} onClick={() => setContador(contador + 1)} > Incrementar </button>
            <button style={{ backgroundColor: contador < 0 ? "red" : "black" }} onClick={() => setContador(contador - 1)} > Decrementar</button>

        </div>
    )

}