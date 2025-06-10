// Prosp é abreviação de propriedades e servem para passar dados para o componente. São similares aos parâmetros de uma função, mas para os componentes

export default function Props(props) {

    return (
        <div>
            <h2>
                {props.titulo} 
            </h2>
            <button>
                {props.nome_botao}
            </button>
            {/* tenho que passar o que vai ser o título lá no App.jsx */}
            {/* Além disso, eu posso passar vários props, mas não preciso usá-los obrigatóriamente, 
            só que ele aparecerá na tela, mas como vazio */}
        </div>
    )
}