// import { Header } from './components/Header/Header'
// import { Promo } from './components/Promo/Promo'
// import { Send } from './components/Send/Send'
// import { About } from './components/About/About'
// import { Services } from './components/Serviсes/Services'
// import { How } from './components/How/How'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import ServicePage from "./pages/ServicePage";

function App() {

  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service/:id" element={<ServicePage/>}/>
    </Routes>
    </Router>
  )
}

export default App
