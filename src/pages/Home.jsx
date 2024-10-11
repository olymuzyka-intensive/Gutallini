import { Header } from '../components/Header/Header'
import { Promo } from '../components/Promo/Promo'
import { Send } from '../components/Send/Send'
import { About } from '../components/About/About'
import { Services } from '../components/Serviсes/Services'
import { How } from '../components/How/How'

function Home() {

  return (
    <>
    <Header />
    <Promo />
    <Send />

    <About />
    <How />

    <Services />
    <Send isActive={false}/>
    </>
  )
}

export default Home
