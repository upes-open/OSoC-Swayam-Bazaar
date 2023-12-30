const mongoose = require('mongoose');
const ProductsModel = require('../models/Products.js');

// const products = async (req, res) => {  
//   const info = ProductsModel.create(req.body)
//   console.log(info)
//   .then((products) => res.json(products))
//   .catch((err) => res.json(err));
//   console.log(req.body);
// };

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

module.exports = products;