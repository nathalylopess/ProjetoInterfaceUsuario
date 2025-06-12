import { useState } from "react";

export default function AlterarElementos() {
    const produtos = [
        { nome: "Camiseta", preco: 30 },
        { nome: "Calça", preco: 60 },
        { nome: "Tênis", preco: 100 }
    ]

    const desconto = produtos.map((item,index) => {
        return {
            nome: item.nome,
            preco: item.preco * 0.9
        }
    })

    return (
        <div>
            <br />
            <h2>Alterar Elementos</h2>
            <h3>Elementos Originais:</h3>
            <ul>
                {produtos.map((item, index) => (
                    <li key={index}>{item.nome} - {item.preco}</li>
                ))}
            </ul>
            <h3>Elementos Alterados</h3>
            <ul>
                {desconto.map((item,index) => (
                <li key={index}>{item.nome} - {item.preco}</li>
                ))}
            </ul>
        </div>
    )
}