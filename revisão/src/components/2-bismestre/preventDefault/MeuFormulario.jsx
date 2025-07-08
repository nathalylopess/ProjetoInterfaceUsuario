import { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Oi, Mundo`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input 
        type="text" 
        value={nome} 
        onChange={e => setNome(e.target.value)} 
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario;
