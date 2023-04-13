import {Link} from 'react-router-dom'

function Navbar(){                                      // this is a JSX function since we are returning both JavaScript and HTML
    return (
        <h1 className="Navbar"> 
                <Link to="/">Home </Link>               {/* Here to refers to the path we defined in the routes */}
                <Link to="/Profile">Profile </Link>
                <Link to="/Projects">Projects </Link>
                <Link to="/About">About </Link>
        </h1>)
}

export default Navbar;