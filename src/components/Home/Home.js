import './Home.scss';
import { Link } from 'react-router-dom';
import Avatar from '../../images/avatar.webp';

function Home() {
  return (
    <section className='home'>
      <div className='home__container-info'>
        <h1 className='home__title'>
          Hi, I&apos;m Luis Tellez a <span className='home__title_accent'>web developer</span> and
          <span className='home__title_accent'> UI/UX Enthusiast</span>
        </h1>
        <h2 className='home__subtitle'>I build sophisticated websites and web applications.</h2>
        <div className='button_accent'>
          <Link to='/contact'>
            <div className='button__text'>Contact me !!</div>
          </Link>
        </div>
      </div>
      <div className='home__container-avatar bounce-in-right'>
        <img src={Avatar} alt='Luis Tellez' className='home__avatar' />
        <div className='home__tooltip'>
          <div className='home__tooltip_square' />
          <div className='home__tooltip_text'>
            Currently working on
            <a href='https://github.com/aegisnull/luistellez' target='_blank' rel='noreferrer'>
              <span className='home__tooltip_text_bold'> Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
