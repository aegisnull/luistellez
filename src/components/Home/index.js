import './index.scss';
import { Link } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Avatar from '../../assets/images/avatar.png';

const Home = () => {
  return (
    <>
      <section className="section home-page" id="home">
        <div className="content">
          <img src={Avatar} alt="avatar" className="home__avatar" />
          <h2 className="home__welcome">👋🏻 Hi, I'm Luis Tellez.</h2>
          <h1 className="home__description">
            I build <span className="underline">sophisticated</span> websites
            and web applications.
          </h1>
          <p className="home__paragraph">
            I’m a freelance designer and developer. I help companies ship
            quality software for happy customers. Let's celebrate your success
            together!
          </p>
          <p className="home__button">
            <a href="#portfolio">See my projects →</a>
          </p>
        </div>
      </section>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
