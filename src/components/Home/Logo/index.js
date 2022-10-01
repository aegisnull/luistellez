import './index.scss';
import LogoL from '../../../assets/images/logo-l.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoL} alt="L" />
    </div>
  );
};

export default Logo;
