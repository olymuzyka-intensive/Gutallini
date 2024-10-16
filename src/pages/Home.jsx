import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Promo } from '../components/Promo/Promo'
import { Send } from '../components/Send/Send'
import { About } from '../components/About/About'
import { Services } from '../components/Serviсes/Services'
import { How } from '../components/How/How'

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
    <Promo />
    <Send isActive={false}/>

    <About />
    <How />

    <Services />
    <Send isActive={false}/>
    </>
  )
}

export default Home
