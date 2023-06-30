import styles from './Projects.module.scss';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../Card/Card';
import cardData from '../../utils/Projects';

function Projects() {
  const router = useRouter();
  const [cardsToShow, setCardsToShow] = React.useState(3);

  const handleViewMore = () => {
    setCardsToShow(cardsToShow + 3);
  };

  React.useEffect(() => {
    if (router.pathname === '/projects') {
      setCardsToShow(cardData.length);
    }
  }, [router.pathname]);

  return (
    <section className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__title}>
          <h2 className='title'>projects</h2>
          <div className={styles.projects__line} />
        </div>
        {router.pathname === '/' ? (
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
      {cardData.length > cardsToShow && (
        <button onClick={handleViewMore} type='button' className={styles.projects__button}>
          View more
        </button>
      )}
    </section>
  );
}

export default Projects;
