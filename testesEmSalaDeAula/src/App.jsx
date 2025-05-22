import './App.css'
import Escopo from './components/Escopo'
import EscopoReduz from './components/EscopoReduz'
import EscopoAtividade from './components/EscopoAtividade'
import Info1v from './components/Info1V'
// import Tentativa from './components/Tentativa'
import Props from './components/Props'

function App() {

let aluno = 'ana'

  return (
    <>
      {/* <Escopo/> */}
      {/* <EscopoReduz /> */}
      {/* <EscopoAtividade/> */}
      {/* <Info1v/> */}
      {/* <Tentativa/> */}
      <Props nome={aluno} newname={'Lopes'} atributo={'oi'} />
      <Props/>
    </>
  )
}

export default App
