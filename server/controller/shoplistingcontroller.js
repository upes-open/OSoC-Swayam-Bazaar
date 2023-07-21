
const mongoose = require('mongoose')
const ShopModel = require('../models/ShopListingModel')

const ListShop=async(req,res)=>{console.log(req.body)
  ShopModel.create(req.body)
   .then((shoplists) => res.json(shoplists))
   .catch((err) => res.json(err));
}

const DisplayShop=async(req,res)=>{ ShopModel.find()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
}


module.exports={ListShop,DisplayShop}