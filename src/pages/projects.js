import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';

function ProjectsPage() {
  return (
    <div className='App'>
      <SEO
        title='Projects'
        description='Selected web development projects by Luis Tellez, including full-stack apps and client sites.'
        path='/projects'
      />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
