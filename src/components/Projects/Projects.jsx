import styles from './Projects.module.scss';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../Card/Card';
import cardData from '../../utils/Projects';

function Projects() {
  const router = useRouter();
  const isProjectsPage = router.pathname === '/projects';
  const [extraCards, setExtraCards] = React.useState(0);

  const cardsToShow = isProjectsPage ? cardData.length : Math.min(3 + extraCards, cardData.length);

  const handleViewMore = () => {
    setExtraCards((count) => count + 3);
  };

  return (
    <section className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__title}>
          <h2 className='title'>projects</h2>
          <div className={styles.projects__line} />
        </div>
        {!isProjectsPage ? (
          <div className={styles.projects__nav}>
            <Link href='/projects'>View all</Link>
          </div>
        ) : null}
      </div>
      <div className={styles.projects__cards}>
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
      {!isProjectsPage && cardData.length > cardsToShow && (
        <button onClick={handleViewMore} type='button' className={styles.projects__button}>
          View more
        </button>
      )}
    </section>
  );
}

export default Projects;
