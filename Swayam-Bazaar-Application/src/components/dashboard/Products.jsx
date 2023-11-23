import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageUpload from './ImageUpload'; // Import the ImageUpload component
import "./style/Product_add.css"
import { useFormik } from "formik";
import axios from "axios";

const Products = () => {
  const [visible, setvisible] = useState(false);
    const [productData, setProductData] = useState({
      name: '',
      category: '',
      price: '',
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
    },
    onSubmit
  })

  const port = process.env.REACT_APP_API_PORT || 5000;
  async function onSubmit(values) {
    axios.post(`http://localhost:${port}/api/Products/products`, values)
      .then(result => {
        console.log(result);
        formik.resetForm();
      })
      .catch(err => console.log(err))
    console.log(values)
  }

  const openModal = () => {
    setvisible(true);
  };

  const closeModal = () => {
    setvisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', productData);
    closeModal();
  };

  

  return (
    <div>
      <div className="title">Products</div>
      <button className="button" onClick={openModal}>Open Modal</button>
      <Modal isOpen={visible} className="modal-content">
        <h1>Product Information</h1>
        <form onSubmit={formik.handleSubmit}>
          <ImageUpload></ImageUpload>
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            name="name"
            {...formik.getFieldProps('name')}
            value={productData.name}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Product Category:</label>
          <input
            type="text"
            name="category"
            {...formik.getFieldProps('category')}
            value={productData.category}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Price:</label>
          <input
            type="text"
            name="price"
            {...formik.getFieldProps('price')}
            value={productData.price}
            onChange={handleInputChange}
            className="form-input"
          />
          <div className="button-container">
            <button type="submit" className="submit-button">Submit</button>
            <button className="close-button" onClick={closeModal}>Close Modal</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Products;
