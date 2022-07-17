import React, {useState} from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const clickFunction =()=>{
        setClick(!click);
    }
  return (
    <>
      <div className="navbar">
            <Link className='logo' to="/">University Clone</Link>

            <nav>
                <ul className={click? "nav_ul active": "nav_ul"}>
                    <li><Link to='/'>Home</Link></li>
                    <li ><Link to="/courses">Courses</Link></li>

                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>

            <div className='icons' onClick={clickFunction}>
                {click ? (<CloseIcon style={{fontSize:"33px",marginTop:"6px",cursor:"pointer"}} />):(<MenuIcon style={{fontSize:"33px",marginTop:"6px",cursor:"pointer"}} />)}
                
                
           
            </div>

      </div>
    </>
  );
};

export default Navbar;
