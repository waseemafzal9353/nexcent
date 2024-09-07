import About from "./components/About";
import Caring from "./components/Caring";
import Clients from "./components/Clients";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Helping from "./components/Helping";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pana from "./components/Pana";
import Tim from "./components/Tim";
import Time from "./components/Time";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Time/>
      <Helping/>
      <Pana/>
      <Tim/>
      <Caring/>
      <Demo/>
      <Footer/>
    </>
  );
}

export default App;
