import './index.scss';
import { Link } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';

const Casa = () => {
  return (
    <>
      <div className="section home-page">
        <div className="content">
          <h2 className="home__welcome">👋🏻 Hi, I'm Luis Tellez.</h2>
          <h1 className="home__description">
            I build sophisticated websites and web applications.
          </h1>
          <p className="home__paragraph">
            I’m a freelance designer and developer. I help companies ship
            quality software for happy customers. Let's celebrate your success
            together!
          </p>
          <Link to="/contact" className="flat-button">
            See my projects ->
          </Link>
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Casa;
