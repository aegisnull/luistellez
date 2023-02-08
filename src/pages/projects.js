import Projects from "../components/Projects/Projects";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ProjectsPage() {
  return (
    <>
      <div className="App">
        <Header />
        <Projects />;
        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
