export default function Props (props){
    return(
        <>
            <div>
                <h2>Teste props</h2>
                <p>o nome {props.nome} foi enviado via props</p>
                <p>{props.newname}</p>
                <p>{props.atributo}</p>
            </div>
        </>
    )
}