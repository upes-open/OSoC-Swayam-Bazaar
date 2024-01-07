const mongoose = require('mongoose');
const ProductsModel = require('../models/Products.js');

const getAllProducts = async (req, res) => {
  try {
    console.log("1")
      const products = await ProductsModel.find();
      res.json(products);
  } catch (error) {
    console.log("2")
      res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};


const products = async (req, res) => {
  try {
    const createdProduct = await ProductsModel.create(req.body);
    console.log(req.body);
    res.status(201).json(createdProduct); // Send a 201 status for successful creation
  } catch (err) {
    console.log(req)
    // console.error(err);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle other errors with a 500 status
  }
};

module.exports = { getAllProducts,products};