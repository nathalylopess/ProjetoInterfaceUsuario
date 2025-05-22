import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick() {
        return(
            alert("handleClick")
        )
    }

    return(
        <>
            <button onClick={() => console.log("Você clicou")} >Clique</button>
            <div>
                <button onClick={() => alert("Você clicou")}>botao ;/</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick</button>
            </div>
            <div className='container' onClick={() => alert("Container")}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti laborum id quae odit quo corporis, dignissimos omnis, eius amet et maiores numquam similique. Sunt laboriosam pariatur temporibus aliquam assumenda laudantium.</p>
            </div>
        </>
    )
}

export default EscopoReduz