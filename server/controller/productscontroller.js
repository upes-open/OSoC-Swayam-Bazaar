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

const GetProductsByCategory = async (req, res) => {
  try {
    // console.log(1)
    const { category } = req.query;
    // console.log(2)
    // Check if a category is provided
    if (!category) {
      return res.status(400).json({ message: 'Category is required' });
    }
    // console.log(3)
    const products = await ProductsModel.find({ category });
    res.json(products);
  } catch (error) {
    // console.log("2");
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

const GetProductsByShopName = async (req, res) => {
  try {
    console.log(req.query)
    const { ShopName } = req.query;
    console.log(ShopName)

    // Validate ShopName (example: check if ShopName is a non-empty string)
    if (!ShopName || typeof ShopName !== 'string' || ShopName.trim() === '') {
      return res.status(400).json({ message: 'Invalid ShopName' });
    }

    const products = await ProductsModel.find({ ShopName });

    if (!products) {
      return res.status(404).json({ message: 'No products found for the specified ShopName' });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
}

module.exports = { getAllProducts,products,GetProductsByCategory,GetProductsByShopName};