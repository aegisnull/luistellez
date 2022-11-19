import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faCss3,
  faGit,
  faHtml5,
  faNpm,
  faReact,
  faSquareJs,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate');

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="section about-page">
      <div className="content">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a React developer and UI/UX enthusiast with a background in
            business administration. I combined my passion for business with my
            interest in programming to ideate and develop business applications.
          </p>
          <p>
            I can bring several years of experience working with companies of
            various activities.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faSquareJs} color="#EFD81D" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faNpm} color="#DD0031" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
