export default function DobrarNumeros() {
    const lista = [1,2,3,4,5]


    return (
        <div>
            <br />
            <h2>Dobrando Números</h2>
            <p>Lista atual: {lista}</p>
            <p>Lista com números dobrados:
                {lista.map((n) => n * 2)}
            </p>
        </div>
    )
}