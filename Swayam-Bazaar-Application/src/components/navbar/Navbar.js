import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import bg from './bg.jpg';
import './navbar.css';

const Navbar = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  useEffect(() => {
    if (theme !== 'dark') {
      document.body.style.background = `url(${bg}) `;
      // document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);

  return (
    <div>
      <nav className={`-mt-3 navbar navbar-expand-lg navbar-${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className={`container-fluid`}>
        
          <Link className={`navbar-brand ${theme === 'dark' ? 'dark-mode' : ''} ps-3`} to="/">
            Swayam Bazaar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" ms-5 navbar-collapse visible justify-content-start flex" id="navbarNav">
          <div className="ms-0 me-auto">
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
            <ul className="navbar-nav" style={{marginTop:"15px"}}>
              <li className="nav-item ms-4">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/feedback">
                  Feedback
                </Link>
              </li>
              
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
