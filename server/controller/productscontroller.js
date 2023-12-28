const mongoose = require('mongoose');
const ProductsModel = require('../models/Products.js');

const products = async (req, res) => {  ProductsModel.create(req.body)
  .then((products) => res.json(products))
  .catch((err) => res.json(err));
};

module.exports = products;