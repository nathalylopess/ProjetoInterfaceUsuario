// É como se fosse uma memória interna do componente
// Guarda informações dinâmicas
// Diferente do props que usa coisas de fora o state é interno ao componente e pode ser atualizado (mudado dinâmicamente)

import { useState } from "react"; // useState é um hook do React, usado para criar um “state” (estado).

export default function Contador() {
    const [contador, setContador] = useState(0)

    //contador: É a variável que guarda o valor atual do contador. No início, ela vale 0.
    // setContador: É a função que atualiza o valor de contador. Quando usamos essa função,
    // o React re-renderiza o componente com o novo valor.
    // useState(0): O valor inicial do state é 0.
    
    return (
        <div>
            <h3>Contador: {contador}</h3>
            <button onClick={() => setContador(contador +1) } > adicionar  </button>
            <button onClick={() => setContador(contador -1) }>diminuir</button>
            <button onClick={() => setContador(0)} >zerar</button>
            {contador > 5 && <p>Você clicou bastante!</p>}

        </div>
    )
}