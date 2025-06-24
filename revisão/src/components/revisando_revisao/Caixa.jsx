import './style.css'

export default function Caixa({children}){
    return(
        <div className='container'>
            <h2>Lidando com Children</h2>
            {children}
        </div>
    )
}