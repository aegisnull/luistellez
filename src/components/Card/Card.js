import './Card.scss';

function Card() {
  return (
    <article className='card'>
      <img src='https://via.placeholder.com/330x201' alt='project' className='card__image' />
      <div className='card__tags'>
        <span className='card__tag'>HTML</span>
        <span className='card__tag'>CSS</span>
        <span className='card__tag'>JavaScript</span>
      </div>
      <div className='card__content'>
        <h3 className='card__title'>NewsExplorer</h3>
        <p className='card__description'>News Reader App</p>
        <div className='card__buttons'>
          <div className='button_accent'>
            <div className='button__text'>Live</div>
          </div>
          <div className='button'>
            <div className='button__text'>Github</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
