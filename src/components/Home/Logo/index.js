import LogoL from '../../../assets/images/home.svg';
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoL} alt="JavaScript,  Developer" />
    </div>
  );
};

export default Logo;
