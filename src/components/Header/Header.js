import './Header.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
          <NavLink to='/'>home</NavLink>
        </li>

        <li className='header__nav_link'>
          <NavLink to='/projects'>projects</NavLink>
        </li>

        {/*         <li className='header__nav_link'>
          <a href='#about-me'>about-me</a>
        </li> */}

        <li className='header__nav_link'>
          <NavLink to='/contact'>contact</NavLink>
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
