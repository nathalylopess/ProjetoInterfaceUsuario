// I - Crie um componente que obtenha os dados de 
// https://jsonplaceholder.typicode.com/albums
// e liste todos os álbuns vinculados a um userID  especificado.
// Para isso, crie um input onde o usuário definirá uma entrada de 1 até 10
// (quantidade de userIDs existentes no link fornecido).

// Exemplo: Se o usuário digitar 5, todos os posts do userID: 5 devem ser exibidos.

// II - Implemente um botão que sempre que clicado faça
// um novo acesso aos posts existentes no link fornecido no item I.
// Utilize useEffect para controlar o acesso da API.

// Link de Referência -  
// https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example 

import { useEffect, useState } from "react"

export default function Data() {

    const [album, setAlbum] = useState([])
    const [userId, setUserId] = useState("")
    const [aux, setAux] = useState(0)
    const [mostrarLista, setMostrarLista] = useState(false)


    useEffect(() => {
        if (mostrarLista) {
            fetch('https://jsonplaceholder.typicode.com/albums')
                .then((res) => res.json())
                .then((data) => setAlbum(data))
            // o primeiro converte para JSON e o segundo guarda na constante usuários
        }
    }, [aux, mostrarLista]) //executa sempre que o valor de aux muda

    const handleSubmit = (e) => {
        e.preventDefault()
        setMostrarLista(true); // marca que pode mostrar

        setAux((valorAntigo) => valorAntigo + 1)
    }

    const albumFiltrado = album.filter((alb) => alb.userId === Number(userId))

    return (
        <div className="container" style={{ backgroundColor: "gray" }}>
            <h2>Questão 02 - Dados</h2>
            <form className="caixa-intra" onSubmit={handleSubmit}>
                <select value={userId} onChange={(e) => { setUserId(e.target.value); setMostrarLista(false) }} name="identificador">
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button>Enviar</button>
            </form>
            <h3>Lista</h3>
            <ul>
                {mostrarLista
                    ? albumFiltrado.map((alb) => (
                        <li key={alb.id}>{alb.title}</li>
                    ))
                    : <p>Escolha um usuário para ver os álbuns.</p>}
            </ul>
        </div>
    )

}