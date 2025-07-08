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
import ContadorSimples from './components/revisando_revisao/ContadorSimples'
import BotaoAlerta from './components/revisando_revisao/BotaoAlerta'
import CampoTexto from './components/revisando_revisao/CampoTexto'
import ListaNomes from './components/revisando_revisao/ListaNomes'
import MensagemProps from './components/revisando_revisao/MensagemProps'
import Caixa from './components/revisando_revisao/Caixa'
import Tarefa from './components/revisando_revisao/Tarefa'

// 2° Bimestre
import MeuFormulario from './components/2-bismestre/preventDefault/MeuFormulario' 
import CapturandoNome from './components/2-bismestre/preventDefault/CapturandoNome'
import NomeSobrenome from './components/2-bismestre/preventDefault/NomeSobrenome'


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
      {/* <h1>Aprendendo .map() e .filter() </h1>
      <DobrarNumeros/>
      <FiltrarNomes/>
      <AlterarElementos/> */}
      {/* <h1>Revisando a revisão</h1>
      <ContadorSimples/>
      <BotaoAlerta/>
      <CampoTexto/>
      <ListaNomes/>
      <MensagemProps mensagem="Olá, mundo!"/>
      <Caixa>
        <p>Esse é um componente Children. Na tela não dá para notar a diferença, mas dê uma olhadinha no código e verá ;)</p>
      </Caixa>
      <Tarefa/> */}

      <h1>2° Bimestre</h1>
      {/* <MeuFormulario/>
      <CapturandoNome/> */}
      <NomeSobrenome/>
    </>
  )
}

export default App
