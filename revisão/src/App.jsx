import './App.css'
import Mensagem from './components/Mensagem'
import Props from './components/Props'
import Contador from './components/useState/Contador'
import MostrarMensagem from './components/useState/MostrarMensagem'
import Zerar from './components/useState/Zerar'
import EspelhoDeTexto from './components/useState/EspelhoDeTexto'
import ColorChanger from './components/useState/ColorChanger'
import Semaforo from './components/useState/Semaforo'
import ListaTarefas from './components/useState/ListaTarefas'

function App() {

  return (
    <>
      <Props titulo="Se você está lendo isso, então deu certo!" />
      <Mensagem/>
      <Props nome_botao="Enviar" />
      <br />
      <h1>Aprendendo useState</h1>
      <br />
      <Contador/>
      <MostrarMensagem/>
      <Zerar/>
      <EspelhoDeTexto/>
      <ColorChanger/>
      <Semaforo/>
      <ListaTarefas/>

    </>
  )
}

export default App
