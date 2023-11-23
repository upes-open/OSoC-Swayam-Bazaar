const mongoose = require("mongoose");
const ProductsModel = require("../models/Products.js");

const products = async (req, res) => {  ProductsModel.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};

const getProducts = async (req, res) => {
  
  ProductsModel.find()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
module.exports = { products, getProducts };