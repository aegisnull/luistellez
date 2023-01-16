import './About.scss';
import AboutImg from '../../images/about-me.png';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__title'>
          <h2 className='title'>about</h2>
          <div className='about__line' />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__content_text'>
          <p className='about__text'>Hello!, I am Luis Tellez.</p>
          <p className='about__text'>
            I am a web developer with a background in business consulting. I am passionate about
            creating intuitive and user-friendly web applications.
          </p>
          <p className='about__text'>
            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
            MySQL.
          </p>
          <p className='about__text'>
            Looking for remote work opportunities. I am available for hire.
          </p>
        </div>
        <img className='about__content_img' src={AboutImg} alt='about' />
      </div>
    </section>
  );
}

export default About;
