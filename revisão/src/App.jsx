import './App.css'
import Mensagem from './components/Mensagem'
import Props from './components/Props'

function App() {

  return (
    <>
      <Props titulo="Se você está lendo isso, então deu certo!" />
      <Mensagem/>
      <Props nome_botao="Enviar" />
    </>
  )
}

export default App
