import Image from 'next/image';
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__title}>
          <h2 className='title'>about</h2>
          <div className={styles.about__line} />
        </div>
      </div>
      <div className={styles.about__content}>
        <div className={styles.about__content_text}>
          <p className={styles.about__text}>Hello!, I am Luis Tellez.</p>
          <p className={styles.about__text}>
            I am a web developer with a background in business consulting. I am passionate about
            creating intuitive and user-friendly web applications.
          </p>
          <p className={styles.about__text}>
            I have experience with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
            MySQL.
          </p>
          <p className={styles.about__text}>
            Looking for remote work opportunities. I am available for hire.
          </p>
        </div>
        <Image
          className={styles.about__content_img}
          width={480}
          height={420}
          src='/images/about-workspace.svg'
          alt='Illustrated code editor introducing Luis as a web developer'
          unoptimized
        />
      </div>
    </section>
  );
}

export default About;
