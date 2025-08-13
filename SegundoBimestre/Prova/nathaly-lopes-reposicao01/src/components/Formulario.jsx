import "./style.css"
import { useState, useEffect } from "react"

export default function Formulario() {

    const [cep, setCep] = useState(0)
    const [aux, setAux] = useState(0)
    const [conteudo, setConteudo] = useState([])

    // const [url,setUrl]=useState("")
    const [mostrarCep, setMostrarCep] = useState(false)
    // https://viacep.com.br/ws/{cep}/json

    const handleSubmit = (e) => {
        console.log("handlesubmit")
        console.log(cep)
        e.preventDefault()
        setMostrarCep(true); // marca que pode mostrar

        setAux((valorAntigo) => valorAntigo + 1)
        console.log(conteudo)
    }

    useEffect(() => {
        if (mostrarCep) {
            console.log("CEP ABAIXO")
            console.log({ cep })
            fetch(`https://viacep.com.br/ws/${cep}/json`)
                .then((res) => res.json())
                .then((data) => setConteudo(data))
            // o primeiro converte para JSON e o segundo guarda na constante conteudo

            console.log("resposta abaixo")
            console.log({ conteudo })

        }
    }, [aux, mostrarCep]) //executa sempre que o valor de aux muda

    return (
        <div className="container">
            <h2>Questão 01</h2>
            <form onSubmit={handleSubmit}>
                <div className="caixa" onChange={(e) => { setCep(e.target.value) }}  >
                    {/* onChange={(e) => { setCep(e.target.value) ; e.preventDefault() }} */}
                    <div className="caixa-intra">
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Idade:</label>
                        <input type="number" name="" />
                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Email:</label>
                        <input type="email" name="" />

                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Profissão:</label>
                        <input type="text" name="" />

                    </div>
                    <div className="caixa-intra">
                        <label htmlFor=""   >CEP:</label>
                        <input id="input" type="number" name="" />
                        {(cep <= 8) ?
                            <small style={{ backgroundColor: "green" }} >000000000</small> :
                            <small style={{ backgroundColor: "red" }} >000000000</small>}

                        {cep}
                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Endereço:</label>
                        <input type="text" name="" />

                    </div>
                    <button type="submit">Consultar CEP</button>
                </div>
                <div className="caixa">
                    <ul>
                        {console.log(conteudo)}
                        {mostrarCep ?
                            conteudo.map((item,index) => (
                        <li key={index} >{item.cep}</li>
                        // <li >{item.logradouro}</li>
                            ))

                            : <h1>nao</h1>}
                        {console.log("conteudo 00 aí")}
                        {console.log(conteudo[0, 0])}



                        
                    </ul>

                </div>
            </form>

        </div>
    )

}