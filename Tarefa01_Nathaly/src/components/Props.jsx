import Card from "./Card"
import kikibutovisk from "../assets/kikibutovisk.jpg";
import fada from "../assets/tinkerbell-png-21915.png"
import "./Props.css"


export default function Props (props){

    const personagens = [
        {
            nome:"Kiki Butovisk",
            imagem:kikibutovisk
        },
        {
            nome:"Tinker Bell",
            imagem:fada
        }
    ]


    return(
        <>
            <main class="main">
                <div>
                    <Card imagem={personagens[0].imagem} />
                    <Card nome={personagens[0].nome}/>
                </div>
                <div>
                    <Card imagem={personagens[1].imagem}/>
                    <Card nome={personagens[1].nome}/>
                </div>
            </main>
            
        </>
    )
}