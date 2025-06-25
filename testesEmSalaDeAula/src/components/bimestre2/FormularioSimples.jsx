import './style.css'

export default function FormularioSimples() {

    return (
        <div className="container">
            <h2>Exercício 1</h2>
            <form onSubmit={(e) =>e.preventDefault(alert("Fomulário enviado"))}>
                <input type="text" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}