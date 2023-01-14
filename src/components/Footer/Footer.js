import './Footer.scss';
import Logo from '../../images/logo.svg';
import Twitter from '../../images/twitter.svg';
import LinkedIn from '../../images/linkedin.svg';
import GitHub from '../../images/github.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container_info'>
          <div className='footer__container_info_contact'>
            <img src={Logo} alt='Luis Tellez' className='footer__logo' />
            <a href='mailto:aegisnull@protonmail.com' className='footer__mail'>
              aegisnull@protonmail.com
            </a>
          </div>
          <p className='footer__subtitle'>Full Stack Web Developer (MERN) based in Mexico</p>
        </div>
        <div className='footer__container_socials'>
          <p className='footer__socials_title'>Media</p>
          <a
            href='
                https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='footer__socials_link'
          >
            <img className='footer__socials_icon' src={GitHub} alt='GitHub icon' />
          </a>
          <a
            href='
                https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='footer__socials_link'
          >
            <img className='footer__socials_icon' src={Twitter} alt='Twitter icon' />
          </a>
          <a
            href='
                https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='footer__socials_link'
          >
            <img className='footer__socials_icon' src={LinkedIn} alt='LinkedIn icon' />
          </a>
        </div>
      </div>
      <p className='footer__copy'>Made by Luis Tellez</p>
    </footer>
  );
}

export default Footer;
