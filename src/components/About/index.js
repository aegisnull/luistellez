import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <section className="section about-page">
      <div className="about">
        <div className="about__left-container">
          <h1 className="about__title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="about__paragraph">
            I'm a React developer and UI/UX enthusiast with a background in
            business administration. I combined my passion for business with my
            interest in programming to ideate and develop business applications.
          </p>
          <p className="about__paragraph">
            I can bring several years of experience working with companies of
            various activities.
          </p>
        </div>
        <div className="about__right-container">
          <img
            src="https://avatars.githubusercontent.com/u/27663011?v=4"
            alt="Luis Tellez"
            className="about__profile-picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
