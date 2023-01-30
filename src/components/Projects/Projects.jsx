import './Projects.scss';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from '../Card/Card';
import cardData from '../../utils/Projects';

function Projects() {
  const currentPath = useLocation().pathname;
  const [cardsToShow, setCardsToShow] = React.useState(3);

  const handleViewMore = () => {
    setCardsToShow(cardsToShow + 3);
  };

  React.useEffect(() => {
    if (currentPath === '/projects') {
      setCardsToShow(cardData.length);
    }
  }, [currentPath]);

  return (
    <section className='projects'>
      <div className='projects__container'>
        <div className='projects__title'>
          <h2 className='title'>projects</h2>
          <div className='projects__line' />
        </div>
        {currentPath === '/' ? (
          <div className='projects__nav'>
            <Link to='/projects'>View all</Link>
          </div>
        ) : null}
      </div>
      <div className='projects__cards'>
        {cardData.slice(0, cardsToShow).map((card) => (
          <Card
            key={card.id}
            image={card.image}
            tags={card.tags}
            title={card.title}
            description={card.description}
            live={card.live}
            github={card.github}
          />
        ))}
      </div>
      {cardData.length > cardsToShow && (
        <button onClick={handleViewMore} type='button' className='projects__button'>
          View more
        </button>
      )}
    </section>
  );
}

export default Projects;
