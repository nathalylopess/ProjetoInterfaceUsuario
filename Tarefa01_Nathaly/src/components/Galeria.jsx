import Card from "./Card"
import Detalhes from "./Detalhes"
import Tema from "./Tema";

import { useState } from "react"

import kikibutovisk from "../assets/kikibutovisk.jpg"
import fada from "../assets/tinkerbell-png-21915.png"
import smurfet from "../assets/cartoon-png-31566.png"
import ladybug from "../assets/artpoin-Ladybug4.png"
import gumball from "../assets/GumballSeason3.webp"
import titioavo from "../assets/TitioAvo.webp"

import "./Galeria.css"


export default function Galeria(props) {
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    const personagens = [
        {
            nome: "Kiki Buttowski ",
            imagem: kikibutovisk,
            descricao: "Buttowski é um garoto de 10 anos, amador, aventureiro e muitas vezes imprudente"
        },
        {
            nome: "Tinker Bell",
            imagem: fada,
            descricao: "Tinker Bell é uma fada mágica que adora aventuras."
        },
        {
            nome: "Smurfet",
            imagem: smurfet,
            descricao: "Smurfet é doce, gentil e a única Smurf garota da vila."
        },
        {
            nome: "Ladybug e Canoir",
            imagem: ladybug,
            descricao: "Juntos, Ladybug e Canoir protegem Paris com coragem e estilo."
        },
        {
            nome: "Gumball",
            imagem: gumball,
            descricao: "Gumball é um garoto com uma imaginação incrível e muitas travessuras."
        },
        {
            nome: "Titio Avô",
            imagem: titioavo,
            descricao: "Titio Avô é divertido e sempre pronto para ajudar com magia."
        }
    ];


    return (
        <>
            <Tema/>
            <main class="main">
                <div className="main">
                    {personagens.map((p, index) => (
                        <div
                            key={index}
                            className="card"
                            onClick={() => setPersonagemSelecionado(p)}
                        >
                            <Card imagem={p.imagem} />
                            <Card nome={p.nome} />
                        </div>
                    ))}
                </div>

                {personagemSelecionado && (
                    <Detalhes
                        personagem={personagemSelecionado}
                        onFechar={() => setPersonagemSelecionado(null)}
                    />
                )}

            </main>

        </>
    )
}