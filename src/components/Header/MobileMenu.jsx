import Link from 'next/link';
import styles from './Header.module.scss';

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div
      id='mobile-menu'
      className={styles['header__mobile-menu']}
      role='dialog'
      aria-modal='true'
      aria-label='Mobile navigation'
    >
      <div className={styles['header__mobile-menu__logo']} />
      <button
        type='button'
        className={styles['header__mobile-menu__close-btn']}
        onClick={() => setIsOpen(false)}
        aria-label='Close mobile menu'
      />
      <ul className={`${styles.header__nav} ${styles.header__nav_mobile}`}>
        <li className={`${styles.header__nav_link} ${styles.header__nav_link_mobile}`}>
          <Link href='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className={`${styles.header__nav_link} ${styles.header__nav_link_mobile}`}>
          <Link href='/projects' onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li className={`${styles.header__nav_link} ${styles.header__nav_link_mobile}`}>
          <Link href='/blog' onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </li>
        <li className={`${styles.header__nav_link} ${styles.header__nav_link_mobile}`}>
          <Link href='/contact' onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
