import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMobileMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={107}
          height={21}
          className={styles.header__logo}
        />
      </Link>
      <ul className={styles.header__nav}>
        <li className={styles.header__nav_link}>
          <Link href='/'>home</Link>
        </li>

        <li className={styles.header__nav_link}>
          <Link href='/projects'>projects</Link>
        </li>

        {/*         <li className='header__nav_link'>
          <a href='#about-me'>about-me</a>
        </li> */}

        <li className={styles.header__nav_link}>
          <Link href='/blog'>blog</Link>
        </li>

        <li className={styles.header__nav_link}>
          <Link href='/contact'>contact</Link>
        </li>
      </ul>
      <button
        className={styles.header__menu_btn}
        type='button'
        onClick={handleMobileMenuClick}
        aria-label='Toggle mobile menu'
      />
      {isOpen ? <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </header>
  );
}

export default Header;
