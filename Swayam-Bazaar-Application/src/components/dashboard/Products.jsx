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
        <form onSubmit={handleSubmit}>
          <ImageUpload></ImageUpload>
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Product Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Price:</label>
          <input
            type="text"
            name="price"
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
