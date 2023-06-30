import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.scss';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__container_info}>
        <h1 className={styles.home__title}>
          Hi, I&apos;m Luis Tellez a
          <span className={styles.home__title_accent}> web developer</span> and
          <span className={styles.home__title_accent}> UI/UX Enthusiast</span>
        </h1>
        <h2 className={styles.home__subtitle}>
          I build sophisticated websites and web applications.
        </h2>
        <div className='button_accent'>
          <Link href='/contact'>
            <div className='button__text'>Contact me !!</div>
          </Link>
        </div>
      </div>
      <div className={styles.home__container_avatar}>
        <Image
          src='/images/avatar.webp'
          width={453}
          height={383}
          alt='Luis Tellez'
          priority={true}
          className={styles.home__avatar}
        />
        <div className={styles.home__tooltip}>
          <div className={styles.home__tooltip_square} />
          <div className={styles.home__tooltip_text}>
            Open to new
            <a href='https://www.linkedin.com/in/luistellezv/' target='_blank' rel='noreferrer'>
              <span className={styles.home__tooltip_text_bold}> Opportunities</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
