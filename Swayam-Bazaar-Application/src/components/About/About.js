// About.js

import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import bg from '../../components/navbar/bg.jpg';
import logo from '../../components/images/Logo_.png';
import { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import './about.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
const About = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  const [theme, setTheme] = useState('light');
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  useEffect(() => {
    if (theme !== 'dark') {
      document.body.style.background = `url(${bg})`;
    } else {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit,
  });

  const port = process.env.REACT_APP_API_PORT || 5000;

  async function onSubmit(values) {
    axios
      .post(`http://localhost:${port}/api/Contact/contactus`, values)
      .then((result) => {
        console.log(result);
        formik.resetForm();
      })
      .catch((err) => console.log(err));
    console.log(values);
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${theme === 'dark' ? 'dark' : 'light'
          } flex justify-center`}
        style={{ backgroundColor: theme === 'dark' ? '#333' : 'white' }}
      >
        <div className="container-fluid">
          <div className="ms-2">
            <Link exact to="/">
              <img src={logo} alt="logo" style={{ width: '15%' }} />
            </Link>
          </div>
          <button
            className="navbar-toggler absolute top-3 right-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse visible mt-3 -ms-4" id="navbarNav">
            <div className="navbar-nav w-full ms-11 flex justify-around">
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`}
                  to="/navbar"
                >
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`}
                  to="/about"
                >
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`}
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`}
                  to="/feedback"
                >
                  Feedback
                </Link>
              </div>
              <div className="switch -ms-12 pt-2 mb-4">
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
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          This web application aims to connect users with local vendors in their
          area, allowing them to purchase groceries and other goods directly
          from these vendors. Unlike the existing local application called City
          Mall, which doesn't offer the option to buy from specific shops, this
          application will enable users to select the shops they prefer. The main
          goal is to establish a direct connection between users and local shops
          for purchasing goods. For instance, if a user wants to buy flour from a
          particular local shop that isn't a well-known brand but offers
          high-quality and affordable flour, this application will assist them in
          doing so. To address the challenge of gathering a comprehensive dataset,
          we propose a solution where shopkeepers themselves can input their
          goods into the application. This approach is similar to how Google Maps
          allows users to add new places they discover to the database. In
          summary, the application will have two separate logins: one for users
          and another for shopkeepers.
        </p>
        <h2 className="text-3xl font-semibold mb-4 mt-5">Our Mission</h2>
        <p className="text-lg">
          Our mission is to empower local communities by bridging the gap between users and local vendors, fostering a vibrant marketplace where users have easy access to a diverse range of products from trusted local shops. We strive to create a seamless shopping experience that prioritizes convenience, quality, and affordability, allowing users to support their local economy while enjoying the convenience of online shopping. Through our platform, we aim to revolutionize the way people shop for everyday essentials, promoting sustainability, community engagement, and economic growth.
        </p>

        <h2 className="text-3xl font-semibold mb-4 mt-5">Our Values</h2>
        <p className="text-lg">
          At our core, we are committed to integrity, transparency, and inclusivity. We believe in fostering strong relationships built on trust and respect, both within our team and with our users and vendors. We value innovation and continuous improvement, constantly seeking new ways to enhance the user experience and deliver value to our community. Sustainability is also a key value for us, and we are dedicated to minimizing our environmental impact and promoting ethical business practices. Above all, we are driven by a passion for making a positive impact in local communities and empowering individuals to thrive.
        </p>
      </div>
      {/* <Map /> */}
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};


// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
//   return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} className="w-full h-full" >
//     <Marker position={center} />
//   </GoogleMap>;
// }

export default About;
