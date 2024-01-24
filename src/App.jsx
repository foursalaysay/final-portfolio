
import "./app.scss"
// import Navbar from "./components/navbar/Navbar";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";


const App = () => {
  return <div>
  
    <section>
      <Navbar />
      <Hero />
    </section>
    
    <section id="Services">
        <Parallax type="services" />
    </section>
    <section>Services</section>
    <section id="portfolio">
        <Parallax type="portfolio" />
    </section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Contact</section>
    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
