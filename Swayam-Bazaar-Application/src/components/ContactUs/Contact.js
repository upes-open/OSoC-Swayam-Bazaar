import { useFormik } from "formik";
import '../../css/contact.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'; 
import Switch from 'react-switch';
import bg from '../../components/navbar/bg.jpg';
import '../../components/navbar/navbar.css';
import logo from "../../components/images/Logo_.png"
const ContactUsPage = () => {
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
      document.body.style.background = `url(${bg}) `;
      // document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit
  })

  const port = process.env.REACT_APP_API_PORT || 5000;
  async function onSubmit(values) {
    axios.post(`http://localhost:${port}/api/Contact/contact-us`, values)
      .then(result => {
        console.log(result);
        formik.resetForm();
      })
      .catch(err => console.log(err))
    console.log(values)
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${theme === 'dark' ? 'dark' : 'light'} flex justify-center`} style={{ backgroundColor: theme === "dark" ? "#333" : "white" }}>

<div className="container-fluid">

  <div className='ms-2'>
    <Link exact to="/">
      <img src={logo} alt="logo" style={{ width: "15%" }} />
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
  <div className=" navbar-collapse visible mt-3 -ms-4" id="navbarNav">

    <div className="navbar-nav w-full ms-11 flex justify-around" >
      <div className="nav-item">
        <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/">
          Home
        </Link>
      
      </div>
      <div className="nav-item">
        <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/about">
          About
        </Link>
      </div>
      <div className="nav-item">
        <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/contact-us">
          Contact Us
        </Link>
      </div>
      <div className="mb-3">
        <Link className={`nav-link ${theme === 'dark' ? 'dark-mode' : ''}`} to="/feedback">
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
    <div className="contact-us-container">
      <div className='form-container'>
        <h1 id='contact-heading'>Contact Us</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className='contactl'>Name</label>
            <input
              type="text"
              name="name"
              {...formik.getFieldProps('name')}
              required
              className='contacti'
            />
          </div>
          <div className="form-group">
            <label className='contactl'>Email</label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps('email')}
              required
              className='contacti'
            />
          </div>
          <div className="form-group">
            <label className='contactl'>Message</label>
            <textarea
              name="message"
              {...formik.getFieldProps('message')}
              required
              className='contacti'
            />
          </div>
          <button id='contact-b' type="submit" >Submit</button>
        </form>
      </div>
      <div className="contact-image" />
    </div>
    </>
  );
};

export default ContactUsPage;
