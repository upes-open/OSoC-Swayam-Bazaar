import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import ImageUpload from './ImageUpload'; // Import the ImageUpload component
import "./style/Product_add.css"
import { useFormik } from "formik";
import axios from "axios";

const Products = () => {
  const [visible, setvisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // console.log("Hi")
        // Make an API request to check if the user is logged in
        const response = await fetch(`http://localhost:${port}/api/Shopkeeper/authenticateShopkeeper`, {
          method: 'GET',
          credentials: 'include',  // Include cookies with the request
        });
        const data = await response.json();
  
        if (response.ok) {
          setUser(data.user);
        }
        else{
          alert("Login as shopkeeper to access this page")
          navigate("/")
        }
      } catch (error) {
        alert('Error checking authentication status:', error);
        navigate("/");
      } 
    };
  
    checkAuthStatus();
  }, []);


  const handleImageSelect = (file) => {
    setSelectedImage(file);
  };

  const imagebase64 = (file) =>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    const data = new Promise((resolve,reject)=>{
      reader.onload = ()=> resolve(reader.result)
      reader.onerror = (err)=> reject(err)
    })
    return data
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const uploadImage = await imagebase64(selectedImage);

    const formData = {"name" : formik.values.name,"category" : formik.values.category,"price" : formik.values.price,"picture" : uploadImage, "ShopName":user.ShopName}

    // Make the API call
    axios.post(`http://localhost:${port}/api/Products/products`, formData,)
      .then(result => {
        console.log(result);
        formik.resetForm();
      })
      .catch(err => console.log(err));

    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
    },
    onSubmit:handleSubmit
  })

  const port = process.env.REACT_APP_API_PORT || 5000;

  const openModal = () => {
    setvisible(true);
  };

  const closeModal = () => {
    setvisible(false);
  };


  return (
    <div>
      <div className="title">Products</div>
      <button className="button" onClick={openModal}>Open Modal</button>
      <Modal isOpen={visible} className="modal-content">
        <h1>Product Information</h1>
        <form onSubmit={formik.handleSubmit}>
          <label className="form-label">Product Name:</label>
          <input
            type="text"
            name="name"
            {...formik.getFieldProps('name')}
            // value={productData.name}
            // onChange={handleInputChange}
            className="form-input"
          />
          <label className="form-label">Product Category:</label>
<select
  name="category"
  {...formik.getFieldProps('category')}
  // value={productData.category}
  // onChange={handleInputChange}
  className="form-input"
>
  <option value="">Select</option>
  <option value="Grocery List">Grocery List</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothes Category">Clothes Category</option>
  <option value="Health And Wellness">Health And Wellness</option>
</select>

          <label className="form-label">Price:</label>
          <input
            type="text"
            name="price"
            {...formik.getFieldProps('price')}
            // value={productData.price}
            // onChange={handleInputChange}
            className="form-input"
          />
          <br/>
          <br/>
          <ImageUpload onImageSelect={handleImageSelect} />
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
