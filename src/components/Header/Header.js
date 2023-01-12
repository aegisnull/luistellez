import './Header.scss';
import Logo from '../../images/logo.svg';

function Header() {
  return (
    <header>
      <h1>React Router</h1>
      <img src={Logo} alt='React Router Logo' />
    </header>
  );
}

export default Header;
