import React, { useState } from 'react';
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../css/listShop.css';
const Listshop = () => {
  const formik = useFormik({
    initialValues: {
      shopname: "",
      description: "",
      address: "",
      contactnumber: "",
      shopimage: ""
    },
    onSubmit
  });

  const port = process.env.REACT_APP_API_PORT || 3001;
  async function onSubmit(values) {
    console.log(values);
    axios.post(`http://localhost:${port}/listshop`,values)
     .then(result => console.log(result))
     .catch(err => console.log(err))
  }

  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      formik.setFieldValue("shopimage", reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  return (
    <div className="bg-gray-100 h-screen p-6 rounded-lg shadow-md" id='con'>
      <h2 className="text-3xl font-bold mb-4">Shop Listing Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="shopName" className="text-lg font-semibold">
            Shop Name:
          </label>
          <input
            type="text"
            id="shopname"
            name="shopname"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
            onChange={formik.handleChange}
            value={formik.values.shopname}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="text-lg font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            rows="4"
            required
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>

        <div className="mb-4 md:flex">
          <div className="md:w-1/2 md:mr-2">
            <label htmlFor="address" className="text-lg font-semibold">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          <div className="md:w-1/2 md:ml-2">
            <label htmlFor="contactNumber" className="text-lg font-semibold">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
              onChange={formik.handleChange}
              value={formik.values.contactnumber}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="text-lg font-semibold">
            Shop Image:
          </label>
          <input
            type="file"
            id="shopimage"
            name="shopimage"
            accept="image/*"
            className="border border-gray-300 rounded-lg py-2 w-full"
            required
            onChange={convertToBase64}
          />
        </div>

          <button type="submit" className="bg-red-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Listshop;
