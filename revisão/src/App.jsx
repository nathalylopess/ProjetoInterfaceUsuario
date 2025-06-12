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
import Cliques from './components/useState/Cliques'
import CampoNome from './components/useState/CampoNome'
import ListaFilmes from './components/useState/ListaFilmes'
import DobrarNumeros from './components/map_filter/DobrarNumeros'
import FiltrarNomes from './components/map_filter/FiltrarNomes'
import AlterarElementos from './components/map_filter/AlterarElementos'

function App() {

  return (
    <>
      {/* <Props titulo="Se você está lendo isso, então deu certo!" />
      <Mensagem/>
      <Props nome_botao="Enviar" />
      <br /> */}
      {/* <h1>Aprendendo useState</h1>
      <Contador/>
      <MostrarMensagem/>
      <Zerar/>
      <EspelhoDeTexto/>
      <ColorChanger/>
      <Semaforo/>
      <ListaTarefas/>
      <Cliques/>
      <CampoNome/>
      <ListaFilmes/> */}
      <h1>Aprendendo .map() e .filter() </h1>
      <DobrarNumeros/>
      <FiltrarNomes/>
      <AlterarElementos/>

    </>
  )
}

export default App
