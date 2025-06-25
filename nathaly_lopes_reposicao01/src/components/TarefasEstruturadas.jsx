import GerenciadorDeTarefas from "./GerenciadorDeTarefas";
import { useState } from "react";

export default function TarefasEstruturadas() {
    const tarefas = [{ acao: "Trabalhar no CCSL", data: "25/06/2025" },{acao:"Treinar", data:"25/06/2025"},{acao:"Trabalhar", data:"26/06/2025"}]
    // Criei uma lista com uma tarefa, para servir de exemplo
    const [mudar,setMudar]=useState(false)
    // useState para mudar o estado de "mudar"
   

    return (
        <div>
            <GerenciadorDeTarefas>
                
                        {tarefas.map((tar) =>
                            <li>
                                <p>Ação: {tar.acao} | Data: {tar.data}</p>
                                <button style={{ backgroundColor: mudar ? "green" : "red" }} onClick={() => setMudar(!mudar)}> {mudar ? "Resolvida" : "Não Resolvida"}</button>
                        {/* Aqui utilizo os operadores ternários para desenvolver a lógica e permitir melhor visualização dastarefas;
              elas, devido o useState já vem por padrão false e essa característica eu fiz assim: 
              * no style: se mudar for verdadeiro, o bg fica verde, se não, fica vermelho (a tarefa por padrão aparece como false)
              da mesma forma para o testo do botão:
              * no botão: Se mudar for verdadeiro (ou seja, se for true), o texto é "Resolvida", se não (false) "Não Resolvida" */}
                            </li>

                        )}
                        {/* utilizo o map para mostrar a tarefa que eu criei*/}


                

            </GerenciadorDeTarefas>
        </div>
    )
}