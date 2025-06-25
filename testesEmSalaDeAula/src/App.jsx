import './App.css'
import Escopo from './components/bimestre1/Escopo'
import EscopoReduz from './components/bimestre1/EscopoReduz'
import EscopoAtividade from './components/bimestre1/EscopoAtividade'
import Info1v from './components/bimestre1/Info1V'
// import Tentativa from './components/Tentativa'
import Props from './components/bimestre1/Props'
import FormularioSimples from './components/bimestre2/FormularioSimples'

function App() {

let aluno = 'ana'

  return (
    <>
      {/* <h1>1° Bimestre</h1> */}
      {/* <Escopo/> */}
      {/* <EscopoReduz /> */}
      {/* <EscopoAtividade/> */}
      {/* <Info1v/> */}
      {/* <Tentativa/> */}
      {/* <Props nome={aluno} newname={'Lopes'} atributo={'oi'} />
      <Props/> */}
      <h1>2° Bimestre</h1>
      <FormularioSimples/>
    </>
  )
}

export default App
