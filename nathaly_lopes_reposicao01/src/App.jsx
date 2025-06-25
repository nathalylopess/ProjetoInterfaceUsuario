import './App.css'
import GerenciadorDeTarefas from './components/GerenciadorDeTarefas'
import EdicaoDeListas from './components/EdicaoDeListas'
import TarefasEstruturadas from './components/TarefasEstruturadas'


function App() {


  return (
    <>
      {/* Componente 01 */}
      <GerenciadorDeTarefas/>

      {/* Componente 02 */}
      <TarefasEstruturadas/>
      
      {/* Componente 03 */}
      <EdicaoDeListas/>
    </>
  )
}

export default App
