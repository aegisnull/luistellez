import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React from 'react';
import Logo from './Logo';
import About from '../About';
import Contact from '../Contact';

const Home = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate');
  const nameArray = [
    ' ',
    'L',
    'u',
    'i',
    's',
    ' ',
    'T',
    'e',
    'l',
    'l',
    'e',
    'z',
  ];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="content">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>Frontend Developer / UI/UX Enthusiast</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Home;
