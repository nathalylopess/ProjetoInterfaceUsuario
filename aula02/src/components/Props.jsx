export default function Props ({nome, newname, atributo}){
    return(
        <>
            <div>
                <h2>Teste props</h2>
                <p>o nome {nome} foi enviado via props</p>
                <p>{newname}</p>
                <p>{atributo}</p>
            </div>
        </>
    )
}