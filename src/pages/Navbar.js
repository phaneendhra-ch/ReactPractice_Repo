import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <h1 className="Navbar"> 
                <Link to="/">Home </Link>
                <Link to="/Profile">Profile </Link>
                <Link to="/Projects">Projects </Link>
                <Link to="/About">About </Link>
        </h1>)
}

export default Navbar;