import { Header } from './components/Header/Header'
import { Promo } from './components/Promo/Promo'
import { Send } from './components/Send/Send'
import { About } from './components/About/About'
import { Services } from './components/Serviсes/Services'
import { How } from './components/How/How'

function App() {

  return (
    <>
    <Header />
    <Promo />
    <Send />
    {/* <How /> */}

    <About />
    <How />

    <Services />
    <Send isActive={false}/>
    </>
  )
}

export default App
