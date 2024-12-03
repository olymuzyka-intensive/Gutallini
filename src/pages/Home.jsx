import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Promo } from "../components/Promo/Promo";
import { Send } from "../components/Send/Send";
import { About } from "../components/About/About";
import { Services } from "../components/Serviсes/Services";
import { How } from "../components/How/How";
import { Advantages } from "../components/Advantages/Advantages";
import ScrollToTop from "../components/ScrollToTop";
import { Visitors } from "../components/How/Visitors";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <ScrollToTop>
      <Promo />
      <Send isActive={false} />
      <About />
      <Advantages />
      <How />
      <Visitors/>
      <Services />      
      <Send isActive={false} />
      </ScrollToTop>
    </>
  );
}

export default Home;
