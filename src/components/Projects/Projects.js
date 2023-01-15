import './Projects.scss';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import cardData from '../../utils/cardData';

function Projects() {
  const currentPath = useLocation().pathname;

  return (
    <section className='projects' id='projects'>
      <div className='projects__container'>
        <div className='projects__title'>
          <h2 className='title'>projects</h2>
          <div className='projects__line' />
        </div>
        {currentPath === '/' ? <div className='projects__nav'>View all</div> : null}
      </div>
      <div className='projects__cards'>
        {cardData.map((card) => (
          <Card
            image={card.image}
            tags={card.tags}
            title={card.title}
            description={card.description}
            live={card.live}
            github={card.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
