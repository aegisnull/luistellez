import './Header.scss';
import Logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <img src={Logo} alt='Logo' />
        <nav className='header__nav'>
          <li className='header__nav_link'>
            <a href='#home'>home</a>
          </li>

          <li className='header__nav_link'>
            <a href='#works'>works</a>
          </li>

          <li className='header__nav_link'>
            <a href='#about-me'>about-me</a>
          </li>

          <li className='header__nav_link'>
            <a href='#contact'>contact</a>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
