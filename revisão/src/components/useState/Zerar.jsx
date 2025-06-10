import { useState } from "react";

export default function Zerar() {
    const [zerar, setZerar]=useState(0)

    return (

        <div>
            <h2>Contador: {zerar}</h2>
            <button onClick={() => setZerar(zerar + 1)} > Aumentar </button>
            <br />
            <button onClick={() => setZerar(0)} >Zerar</button>
        </div>

    )

}