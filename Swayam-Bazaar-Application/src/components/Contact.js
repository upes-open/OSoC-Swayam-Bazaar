import React from 'react';
import { useFormik } from "formik";
import '../css/contact.css';
import axios from 'axios';

const ContactUsPage = () => {
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
    // const directory = process.env.SITE_URL || "localhost:3001"
    axios.post(`http://localhost:${port}/api/Contact/contact-us`, values)
      .then(result =>{
         console.log(result);
         formik.resetForm();
      })
      .catch(err => console.log(err))
    console.log(values)
  }

  return (
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
  );
};

export default ContactUsPage;
