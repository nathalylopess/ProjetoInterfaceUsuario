import { useState } from "react";

export default function ColorChanger() {

    const[change, setChange]=useState('#ffffff')

    function gerarCorAleatoria(){
        const letras = "0123456789ABCDEF"
        let cor = "#"
        for (let i = 0; i < 6; i ++) {
            const indice = Math.floor(Math.random() * 16)
            cor += letras[indice]
        } 
        return cor
    }

    function mudarCor() {
        const novacor = gerarCorAleatoria()
        setChange(novacor)
    }

    return (

        <div style={{backgroundColor: change, height:"100vh", padding:"20px"}}>
            <br />
            <h2>Mudando a cor</h2>
            <p>Cor de fundo: {change}</p>
            <button onClick={mudarCor}>Mudar Cor</button>

        </div>

    )
}