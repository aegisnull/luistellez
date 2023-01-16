import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import MobileMenu from './MobileMenu';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMobileMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Logo' className='header__logo' />
      </Link>
      <nav className='header__nav'>
        <li className='header__nav_link'>
          <Link to='/'>home</Link>
        </li>

        <li className='header__nav_link'>
          <Link to='/projects'>projects</Link>
        </li>

        {/*         <li className='header__nav_link'>
          <a href='#about-me'>about-me</a>
        </li> */}

        <li className='header__nav_link'>
          <Link to='/contact'>contact</Link>
        </li>
      </nav>
      <button
        className='header__menu-btn'
        type='button'
        onClick={handleMobileMenuClick}
        aria-label='Toggle mobile menu'
      />
      {isOpen ? <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </header>
  );
}

export default Header;
