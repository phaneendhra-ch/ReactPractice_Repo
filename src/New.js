import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Customhook from './Customhook'   // here we are importing the customhook defined Customhook.js

function New(){

    const [isVisible,toggle] = Customhook();     // here we are creating an instance for the customhook
    const [isVisible1,toggle1] = Customhook();   // here we are creating an instance for the customhook

    return (    // this is a JSX Component
    <div className="New">
        <Router>
               <Navbar/>    {/*Here we just created a new component for the Navigation Bar */}

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="*" element={<h1><b>PAGE NOT FOUND</b></h1>} />
            </Routes>
        </Router>

    <button onClick={toggle}> {isVisible ? "Hide":"Show"}</button>      {/* Here we are using a custom Hook where we abstract the useState from Customhook.js  */}
    {isVisible && <h1>Hidden Text 1</h1>}

    <button onClick={toggle1}> {isVisible1 ? "Hide":"Show"}</button>    {/* Here we are using a custom Hook where we abstract the useState from Customhook.js  */}
    {isVisible1 && <h1>Hidden Text 2</h1>}
    </div>)
}

export default New;