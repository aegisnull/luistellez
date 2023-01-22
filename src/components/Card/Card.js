import './Card.scss';

function Card({ image, tags, title, description, live, github }) {
  return (
    <article className='card fade-in'>
      <video autoPlay muted loop className='card__image' width='328px' height='200px'>
        <source src={image} type='video/webm' />
      </video>
      <div className='card__tags'>
        {tags.map((tag) => (
          <span className='card__tag'>{tag}</span>
        ))}
      </div>
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__description'>{description}</p>
        <div className='card__buttons'>
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
