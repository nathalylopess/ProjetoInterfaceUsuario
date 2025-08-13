import "./style.css"
import { useState, useEffect } from "react"

export default function Formulario() {

    const [cep, setCep] = useState(0)
    const [aux, setAux] = useState(0)
    const [conteudo, setConteudo] = useState([])
    const [mostrarCep, setMostrarCep] = useState(false)

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
        }
    }, [aux, mostrarCep]) //executa sempre que o valor de aux muda

    return (
        <div className="container">
            <h2>Questão 01</h2>
            <form onSubmit={handleSubmit}>
                <div className="caixa" onChange={(e) => { setCep(e.target.value) }}  >
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
                        <label htmlFor="" >CEP:</label>
                        {(cep.toString().length <= 8) ?
                            <input style={{ backgroundColor: "green" }} id="input" type="number" name="" /> :
                            <input style={{ backgroundColor: "red" }} id="input" type="number" name="" />}
                    </div>
                    <div className="caixa-intra">
                        <label htmlFor="">Endereço:</label>
                        <input type="text" name="" />
                    </div>
                    <button type="submit">Consultar CEP</button>
                </div>
                <div className="caixa">

                        {console.log(conteudo)}
                        {mostrarCep ? (
                            <ul>
                                <li >CEP: {conteudo.cep}</li>
                                <li >Logradouro: {conteudo.logradouro}</li>
                                <li>Unidade: {conteudo.unidade}</li>
                                <li>Bairro: {conteudo.bairro}</li>
                                <li>Localidade: {conteudo.locaidade}</li>
                                <li>UF: {conteudo.up}</li>
                                <li>Estado: {conteudo.estado}</li>
                                <li>Região: {conteudo.regiao}</li>
                                <li>IBGE: {conteudo.ibge}</li>
                                <li>Gia: {conteudo.gia}</li>
                                <li>DDD: {conteudo.ddd}</li>
                                <li>Siafi: {conteudo.siafi}</li>
                            </ul>
                        )
                            : <p>Aguardando CEP</p>}
                </div>
            </form>

        </div>
    )

}