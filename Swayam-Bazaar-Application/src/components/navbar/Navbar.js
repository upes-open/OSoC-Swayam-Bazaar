import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Switch from 'react-switch';
import bg from './bg.jpg';
import './navbar.css'
const Navbar = (props) => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  useEffect(() => {
      
      if(theme !=='dark'){
        document.body.style.background = `url(${bg}) `;
        document.body.style.backgroundSize = 'cover';
      }
      else{
        document.body.style.backgroundColor = ' rgba(0, 0, 0, 0.8)';
      }
    return () => {
        document.body.style.background = null;
    };
}, [theme]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className={`container mx-5 `} >
          <Link activeclassname="active" className={`navbar-brand  ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} >Swayam Bazaar</Link>
          <ul className="navbar-nav me-auto">
            <li className="nav-item ps-3">
              <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item ps-3">
              <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} to="/about" >About</Link>
            </li>
            <li className="nav-item ps-3">
              <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} to="/contact" >Contant Us</Link>
            </li>
            <li className="nav-item ps-3">
              <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} to="/feedback" >Feedback</Link>
            </li>
          </ul>
          <Switch
            checked={theme === 'dark'}
            onChange={() => toggleTheme(theme)}
            onColor="#2C3245"
            offColor="#E1E2E2"
            onHandleColor="#fff"
            handleDiameter={10}
            uncheckedIcon="🔆"
            checkedIcon="🌙"
            height={25}
            width={57}
            className="theme-toggle-switch px-5"
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar