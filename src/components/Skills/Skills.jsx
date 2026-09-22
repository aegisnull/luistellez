import styles from './Skills.module.scss';
import skills from '../../utils/Skills';
import Image from 'next/image';
import Reveal from '../Reveal/Reveal';

function Skills() {
  return (
    <section className={styles.skills}>
      <Reveal className={styles.skills__container}>
        <div className={styles.skills__title}>
          <h2 className='title'>skills</h2>
          <div className={styles.skills__line} />
        </div>
      </Reveal>
      <div className={styles.skills__container_content}>
        <Reveal variant='left'>
          <Image
            src='/images/skills.svg'
            width={349}
            height={286}
            alt=''
            className={styles.skills__image}
          />
        </Reveal>
        <div className={styles.skills__card_container}>
          {skills.map((skill, index) => (
            <Reveal key={skill.id} delay={index * 70} variant='scale'>
              <div className={styles.skills__card}>
                <h3 className={styles.skills__card_title}>{skill.title}</h3>
                <ul className={styles.skills__card_list}>
                  {skill.items.map((item) => (
                    <li key={item} className={styles.skills__card_item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
