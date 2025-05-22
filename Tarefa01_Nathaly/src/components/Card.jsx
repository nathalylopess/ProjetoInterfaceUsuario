export default function Card ({imagem,nome}){
    return(
        <>
            <div>
                <figure>
                    <img src={imagem} alt="" />
                    <figcaption>{nome}</figcaption>
                </figure>
            </div>
        </>
    )
}