import './Skills.scss';
import DecorativeImage from '../../images/skills.svg';

function Skills() {
  return (
    <section className='skills'>
      <div className='skills__container'>
        <div className='skills__title'>
          <h2 className='title'>skills</h2>
          <div className='skills__line' />
        </div>
      </div>
      <div className='skills__container_content'>
        <img src={DecorativeImage} alt='skills' className='skills__image' />
        <div className='skills__card-container'>
          <div className='skills__card'>
            <h3 className='skills__card-title'>Languages</h3>
            <ul className='skills__card-list'>
              <li className='skills__card-item'>JavaScript</li>
              <li className='skills__card-item'>TypeScript</li>
            </ul>
          </div>
          <div className='skills__card'>
            <h3 className='skills__card-title'>Databases</h3>
            <ul className='skills__card-list'>
              <li className='skills__card-item'>MongoDB</li>
              <li className='skills__card-item'>MySQL</li>
            </ul>
          </div>
          <div className='skills__card'>
            <h3 className='skills__card-title'>Tools</h3>
            <ul className='skills__card-list'>
              <li className='skills__card-item'>Git</li>
              <li className='skills__card-item'>GitHub</li>
              <li className='skills__card-item'>VS Code</li>
              <li className='skills__card-item'>Postman</li>
              <li className='skills__card-item'>Figma</li>
              <li className='skills__card-item'>Photoshop</li>
              <li className='skills__card-item'>Cyberduck</li>
            </ul>
          </div>
          <div className='skills__card'>
            <h3 className='skills__card-title'>Other</h3>
            <ul className='skills__card-list'>
              <li className='skills__card-item'>HTML</li>
              <li className='skills__card-item'>CSS</li>
              <li className='skills__card-item'>SASS</li>
              <li className='skills__card-item'>REST</li>
            </ul>
          </div>

          <div className='skills__card'>
            <h3 className='skills__card-title'>Frameworks</h3>
            <ul className='skills__card-list'>
              <li className='skills__card-item'>React</li>
              <li className='skills__card-item'>Express</li>
              <li className='skills__card-item'>Node</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
