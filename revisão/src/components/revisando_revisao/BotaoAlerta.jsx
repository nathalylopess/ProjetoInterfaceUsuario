import './style.css'

export default function BotaoAlerta() {

    return (
         <div className='container' >
            <h2>Botão Alerta</h2>
            <button onClick={() => alert('Botão clicado')}>Clique</button>
         </div>
    )

}