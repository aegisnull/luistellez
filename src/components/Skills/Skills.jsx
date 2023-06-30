import styles from './Skills.module.scss';
import skills from '../../utils/Skills';
import Image from 'next/image';

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <div className={styles.skills__title}>
          <h2 className='title'>skills</h2>
          <div className={styles.skills__line} />
        </div>
      </div>
      <div className={styles.skills__container_content}>
        <Image
          src='./images/skills.svg'
          width={349}
          height={286}
          alt='skills'
          className={styles.skills__image}
        />
        <div className={styles.skills__card_container}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skills__card}>
              <h3 className={styles.skills__card_title}>{skill.title}</h3>
              <ul className={styles.skills__card_list}>
                {skill.items.map((item, index) => (
                  <li key={index} className={styles.skills__card_item}>
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
