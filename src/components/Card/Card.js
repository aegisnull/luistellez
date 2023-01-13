import './Card.scss';

function Card() {
  return (
    <article className='card'>
      <div className='card__img'>
        <img src='https://via.placeholder.com/300x200' alt='project' />
      </div>
      <div className='card__content'>
        <h3 className='card__title'>Project title</h3>
        <p className='card__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
          lacinia, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl. Sed euismod,
          nisl vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet
          nisl.
        </p>
        <div className='card__tags'>
          <span className='card__tag'>HTML</span>
          <span className='card__tag'>CSS</span>
          <span className='card__tag'>JavaScript</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
