import Home from '../Home/Home';
import Quote from '../Quote/Quote';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Blog from '../Blog/Blog';

function Main({ posts }) {
  return (
    <>
      <main id="home">
        <Home />
        <Quote />
        <Projects />
        <Skills />
        <Blog posts={posts} />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Main;
