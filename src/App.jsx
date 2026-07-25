import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ValuesBar from "./components/ValuesBar.jsx";
import Pricing from "./components/Pricing.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValuesBar />
        <Pricing />
        <Portfolio />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
