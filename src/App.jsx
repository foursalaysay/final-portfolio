
import "./app.scss"
// import Navbar from "./components/navbar/Navbar";
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import TechStack from "./components/techstack/TechStack";

const App = () => {
  return <div>
  
    <section>
      <Navbar />
      <Hero />
    </section>
    {/* <section id="Services">
        <Parallax type="services" />
    </section> */}
    <section>
       <TechStack />
    </section>
    {/* <section id="Portfolio">
        <Parallax type="portfolio" />
    </section> */}
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Contact</section>
    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
