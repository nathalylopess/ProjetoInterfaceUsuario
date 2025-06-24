import './style.css'

export default function MensagemProps(props) {
    return (
        <div className='container'>
            <h2>Props</h2>
            <p> Sua mensagem via props: {props.mensagem} </p>
        </div>
    )
}