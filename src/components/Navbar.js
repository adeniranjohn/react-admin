import  '../styles/Navbar.scss'
import Toggle from './Toggle';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
    
        <nav>
        <h2><Link to="/">AdminBoard</Link></h2>
        <div>
        <Toggle/>

        <Link to="/">Login</Link>
    
           </div>
        
        </nav>

    )
}


export default Navbar;