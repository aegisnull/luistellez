import { Link } from "react-router-dom";
import './index.scss';
import LogoL from '../../assets/images/logo-l.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoL} alt='logo' />
            <img src={LogoSubtitle} alt='luistellez' />
        </Link>
    </div>
)

export default Sidebar;