import './index.scss';
import LogoL from '../../../assets/images/logo-l.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoL} alt="L" />
      <svg
        version="1.0"
        width="559pt"
        height="897pt"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path d="M 339.26999,12.722625 218.1775,717.61247 l 329.84964,0.005 -25.2328,147.01108 L 52.061499,863.97563 198.08226,12.680763 Z" />
          <path d="M 155.54624,42.30337 193.01494,42.163909 51.206176,864.21653 485.38382,864.7404 480.47428,894.29205 9.742872,894.24555 Z" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
