import { useState } from "react";

export default function Semaforo() {
    const [cor, setCor] = useState("#000")

    return (

        <div>
            <br />
            <h2>Semáforo</h2>
            <div style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: cor,
                margin: "20px auto"
            }}>
            </div>
            <button onClick={() => setCor("#fa0000")}>Vermelho</button>
            <button onClick={() => setCor("#f6fa00")}>Amarelo</button>
            <button onClick={() => setCor("#00fa08")}>Verde</button>
        </div>

    )


}