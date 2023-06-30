import Image from 'next/image';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_info}>
          <div className={styles.footer__container_info_contact}>
            <Image
              src='/images/logo.svg'
              alt='Luis Tellez'
              width={50}
              height={50}
              className={styles.footer__logo}
            />
            <a href='mailto:aegisnull@protonmail.com' className={styles.footer__mail}>
              aegisnull@protonmail.com
            </a>
          </div>
          <p className={styles.footer__subtitle}>Full Stack Web Developer (MERN) based in Mexico</p>
        </div>
        <div className={styles.footer__container_socials}>
          <p className={styles.footer__socials_title}>Media</p>
          <div className={styles.footer__socials}>
            <a
              href='
              https://github.com/aegisnull'
              target='_blank'
              rel='noreferrer'
              className={styles.footer__socials_link}
            >
              <Image
                className={styles.footer__socials_icon}
                src='/images/github.svg'
                width={30}
                height={30}
                alt='GitHub icon'
              />
            </a>
            <a
              href='
              https://twitter.com/LuisTellezDev'
              target='_blank'
              rel='noreferrer'
              className={styles.footer__socials_link}
            >
              <Image
                className={styles.footer__socials_icon}
                src='/images/twitter.svg'
                width={30}
                height={30}
                alt='Twitter icon'
              />
            </a>
            <a
              href='
              https://www.linkedin.com/in/luistellezv/'
              target='_blank'
              rel='noreferrer'
              className={styles.footer__socials_link}
            >
              <Image
                className={styles.footer__socials_icon}
                src='/images/linkedin.svg'
                width={30}
                height={30}
                alt='LinkedIn icon'
              />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footer__copy}>Made by Luis Tellez</p>
    </footer>
  );
}

export default Footer;
