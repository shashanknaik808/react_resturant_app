import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='navbar-container dark-mode'>
            <div className='logo'>Yassa's Kitchen</div>
            <div className='buttons'>
                <Link to="/login">
                    <button className='nav-button'>Login</button>
                </Link>
                <br />
                <Link to="/resturant">
                    <button className='nav-button'>Restaurant</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;