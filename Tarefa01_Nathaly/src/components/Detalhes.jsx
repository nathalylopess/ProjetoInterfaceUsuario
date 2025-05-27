export default function Detalhes({ personagem, onFechar }) {
    return (
        <div className="detalhes">
            <h2>{personagem.nome}</h2>
            <img src={personagem.imagem} alt={personagem.nome} style={{ width: "300px" }} />
            <p>{personagem.descricao}</p>
            <button onClick={onFechar}>Fechar</button>
        </div>
    );
}
