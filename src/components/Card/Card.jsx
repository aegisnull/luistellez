import Image from 'next/image';
import styles from './Card.module.scss';

function Card({ image, tags, title, description, live, github }) {
  return (
    <article className={styles.card}>
      <div className={styles.card__image}>
        <Image src={image} alt={title} width={330} height={201} />
      </div>
      <div className={styles.card__tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.card__tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__buttons}>
          <a href={live} className='button_accent' target='_blank' rel='noopener noreferrer'>
            <div className='button__text card__button_live'>Live</div>
          </a>
          {github && (
            <a href={github} className='button' target='_blank' rel='noopener noreferrer'>
              <div className='button__text card__button_git'>Github</div>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
