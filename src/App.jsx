
import "./app.scss"
// import Navbar from "./components/navbar/Navbar";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import TechStack from "./components/techstack/TechStack";
import Parallax2 from "./components/parallax/Parallax2";
const App = () => {
  return <div>
  
    <section>
      <Navbar />
      <Hero />
    </section>
    
    <section id="services">
        <Parallax type="services" />
    </section>
    <section>
       <TechStack />
    </section>
    <section id="portfolio">
        <Parallax2 type="portfolio" />
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
