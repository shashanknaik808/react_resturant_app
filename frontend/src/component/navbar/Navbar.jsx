import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='container'>
            <Link to={"/login"}>
                <button>Login</button>
            </Link>

            <Link to={"/resturant"}>
                <button>Resturant</button>
            </Link>
        </div>
    )
}

export default Navbar;