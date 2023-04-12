import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './pages/Navbar';

function New(){
    return (
    <div className="New">
        <Router>
               <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="*" element={<h1><b>PAGE NOT FOUND</b></h1>} />
            </Routes>
        </Router>
    
    </div>)
}

export default New;