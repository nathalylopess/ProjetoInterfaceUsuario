const EscopoAtividade = () => {
    function handleClick() {
        return(
            document.getElementById('fundo').style.backgroundColor = 'blue'
        )
    }

    return(
        <>
            <div  id="fundo"className='container' onClick={() => alert("Container")}>
                <p>Eu mudo de cor</p>
            </div>

            <div>
                <button onClick={handleClick} >mude a cor da tela</button>
            </div>
        </>
    )
}

export default EscopoAtividade