import './Projects.scss';
import Card from '../Card/Card';

function Projects() {
  return (
    <section className='projects'>
      <div className='projects__container'>
        <div className='projects__title'>
          <h2 className='title'>projects</h2>
          <div className='projects__line' />
        </div>
        <div className='projects__nav'>View all</div>
      </div>
      <div className='projects__cards'>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Projects;
