import './App.css'
import API from './components/Api'
import HelloWorld from "./components/HelooWorld"
import Intro from "./components/Intro"
import Temporizador from './components/Temporizador'

function App() {

  return (
    <>
      <h1>UseEffect</h1>
      <HelloWorld/>
      <Intro/>
      <API/>
      <Temporizador/>
    </>
  )
}

export default App
