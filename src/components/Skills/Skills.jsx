import './Skills.scss';
import DecorativeImage from '../../images/skills.svg';
import skills from '../../utils/Skills';

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
          {skills.map((skill) => (
            <div key={skill.id} className='skills__card'>
              <h3 className='skills__card-title'>{skill.title}</h3>
              <ul className='skills__card-list'>
                {skill.items.map((item, index) => (
                  <li key={index} className='skills__card-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
