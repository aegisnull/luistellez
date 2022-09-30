import { Link, NavLink } from "react-router-dom";
import './index.scss';
import LogoL from '../../assets/images/logo-l.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoL} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='luistellez' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

            </NavLink>
        </nav>
    </div>
)

export default Sidebar;