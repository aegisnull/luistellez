import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMobileMenuClick() {
    setIsOpen((open) => !open);
  }

  React.useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src='/images/logo_light.svg'
          alt='Luis Tellez'
          width={150}
          height={50}
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
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
      />
      {isOpen ? <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </header>
  );
}

export default Header;
