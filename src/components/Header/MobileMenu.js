import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`header__mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <div className='header__mobile-menu__logo' />
      <button
        type='button'
        className='header__mobile-menu__close-btn'
        onClick={() => setIsOpen(false)}
        aria-label='Close mobile menu'
      />
      <ul className='header__nav header__nav_mobile'>
        <li className='header__nav_link header__nav_link_mobile'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className='header__nav_link header__nav_link_mobile'>
          <Link to='/projects' onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        {/* <li className='header__nav_link header__nav_link_mobile'>
          <Link to='/about-me' onClick={() => setIsOpen(false)}>
            About Me
          </Link>
        </li> */}
        <li className='header__nav_link header__nav_link_mobile'>
          <Link to='/contact' onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
