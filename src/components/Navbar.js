import  '../styles/Navbar.scss'
import Toggle from './Toggle';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
    
        <nav>
        <h2><Link to="/">AdminBoard</Link></h2>
        <span>
        <Toggle/>

        <Link to="/dashbaord">Dashboard</Link>
    
           </span>
        
        </nav>

    )
}


export default Navbar;