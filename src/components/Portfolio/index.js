import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Project1 from '../../assets/images/project1.webp';
import Project2 from '../../assets/images/project2.webp';
import Project3 from '../../assets/images/project3.webp';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <section className="section portfolio-page" id="portfolio">
      <div className="portfolio">
        <h1 className="portfolio__title">
          <span className="underline">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </span>
        </h1>
        <div className="cards">
          <article className="card">
            <img src={Project1} alt="project" className="card__img" />
            <div className="card__text-content">
              <h2 className="card__title">Social Media App</h2>
              <p className="card__description">
                Instagram inspired social media app built with React. Users can
                change user details, create new cards, delete cards and like
                cards.
              </p>
              <div className="card__links">
                <div className="card__button">
                  <a href="https://github.com/aegisnull/around-react">
                    View on Github →
                  </a>
                </div>
                <div className="card__button">
                  <a href="https://aegisnull.github.io/around-react/">
                    View Live →
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article className="card">
            <img src={Project2} alt="project" className="card__img" />
            <div className="card__text-content">
              <h2 className="card__title">Memorama Game</h2>
              <p className="card__description">
                Small game build with vanilla JS to practice using functions,
                loops & arrays. The game has a timer, a score counter and a high
                score.
              </p>
              <div className="card__links">
                <div className="card__button">
                  <a href="https://github.com/aegisnull/memorama">
                    View on Github →
                  </a>
                </div>
                <div className="card__button">
                  <a href="https://aegisnull.github.io/memorama/">
                    View Live →
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article className="card">
            <img src={Project3} alt="project" className="card__img" />
            <div className="card__text-content">
              <h2 className="card__title">Accounting Landing Page</h2>
              <p className="card__description">
                Landing page for an accounting firm built with Bootstrap 4. The
                UI is fully responsive and the page is built with HTML, CSS &
                JS.
              </p>
              <div className="card__links">
                <div className="card__button">
                  <a href="https://github.com/aegisnull/preparatuconta.com">
                    View on Github →
                  </a>
                </div>
                <div className="card__button">
                  <a href="https://preparatuconta.com">View Live →</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
