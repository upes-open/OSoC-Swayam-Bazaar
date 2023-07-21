const mongoose = require("mongoose");
const Shopkeeper = require('../models/ShopkeeperModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a shopkeeper
const loginShopkeeper = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await Shopkeeper.login(email, password)


// create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})// See token being sent in response to frontend
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a shopkeeper
const signupShopkeeper = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Shopkeeper.signup(email, password)

    //create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupShopkeeper, loginShopkeeper }

