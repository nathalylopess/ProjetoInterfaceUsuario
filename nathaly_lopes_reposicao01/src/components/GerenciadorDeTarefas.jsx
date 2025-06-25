import { useState } from 'react'
import './style.css'

export default function GerenciadorDeTarefas({children}) {
    const [mudar,setMudar]=useState(false)
    // useState para mudar o estado de "mudar"

    const tarefa = [{ acao: "estudar para PIU", data: "25/06/2025" }]
    // Criei uma lista com uma tarefa, para servir de exemplo

    return (
        <div className="container">
            <h2>Gerenciador de Tarefas</h2>
            <ol>
                {tarefa.map((tar) =>
                    <li>
                                <p>Ação: {tar.acao} | Data: {tar.data}</p>
                                <button style={{ backgroundColor: mudar ? "green" : "red" }} onClick={() => setMudar(!mudar)}> {mudar ? "Resolvida" : "Não Resolvida"}</button>
                        {/* Aqui utilizo os operadores ternários para desenvolver a lógica e permitir melhor visualização dastarefas;
              Devido o useState, coloquei por padrão false e essa característica eu fiz assim: 
              * no style: se "mudar" for verdadeiro, o bg fica verde, se não, fica vermelho (a tarefa por padrão aparece como false)
              da mesma forma para o testo do botão:
              * no botão: Se "mudar" for verdadeiro (ou seja, se for true), o texto é "Resolvida", se não (false) "Não Resolvida" */}
                            </li>

                        )}
                {children}
            </ol>
            
        </div>
    )
}