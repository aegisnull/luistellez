import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container_info'>
          <h2 className='footer__title'>Luis Tellez</h2>
          <p className='footer__subtitle'>Web Developer</p>
        </div>
        <div className='footer__container_socials'>
          <a
            href='
                https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='footer__link'
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
