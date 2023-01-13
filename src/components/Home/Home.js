import './Home.scss';
import Avatar from '../../images/avatar.png';

function Home() {
  return (
    <section className='home'>
      <div className='home__container'>
        <div className='home__container_info'>
          <h1 className='home__title'>
            Hi, I&apos;m Luis Tellez a <span className='home__title_accent'>web developer</span> and
            <span className='home__title_accent'>UI/UX Enthusiast</span>
          </h1>
          <h2 className='home__subtitle'>I build sophisticated websites and web applications.</h2>
          <div className='button home__button'>Contact me</div>
        </div>
        <div className='home__container_avatar'>
          <img src={Avatar} alt='Luis Tellez' />
        </div>
      </div>
    </section>
  );
}

export default Home;
