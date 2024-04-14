const mongoose = require('mongoose');
const {createProductsModelForUser,createUserDatabaseConnection} = require('../models/Products.js');

const getAllProducts = async (req, res) => {
  try {
    console.log("1")
    const shop = 'akshitbhutaniabcd1904'
    const connection = createUserDatabaseConnection(shop);
    const ProductsModel = createProductsModelForUser(shop, connection);
      const products = await ProductsModel.find();
      console.log(products)
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
    console.log(1)
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const picture = req.body.picture;
    const data={name,category,price,picture};
    console.log(req.body)
    const createdProduct = await insertProductForUser(req.body.email,data);
    console.log(2)
    res.status(201).json(createdProduct); // Send a 201 status for successful creation
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' }); // Handle other errors with a 500 status
  }
};

const insertProductForUser = async (email, productData) => {
  try {
  console.log(11)
  var username = extractUsername(email);
  const connection = createUserDatabaseConnection(username);
  console.log(12)
  const ProductsModel = createProductsModelForUser(email, connection);
  console.log(13)
  const createdProduct = await ProductsModel.create(productData);
  console.log(createdProduct)
  return createdProduct;
} catch (err){
  console.log(err)
}}

function extractUsername(email) {
  // Find the position of the "@" symbol
  var atIndex = email.indexOf('@');
  
  // Extract the substring before the "@"
  var username = email.substring(0, atIndex);
  
  // Remove special characters like . and _
  username = username.replace(/[._]/g, ''); // Replace all '.' and '_' with ''
  
  return username;
}


module.exports = { getAllProducts,products,GetProductsByCategory};