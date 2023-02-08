import Home from "../Home/Home";
import Quote from "../Quote/Quote";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import About from "../About/About";

function Main() {
  return (
    <>
      <main id="home">
        <Home />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Main;
