const mongoose = require("mongoose");
const Shopkeeper = require('../models/ShopkeeperModel')
const jwt = require('jsonwebtoken')
const cookie = require('cookie');



const createToken = (email) => {
  return jwt.sign({email}, process.env.SECRET, { expiresIn: '3d' })
}

// login a shopkeeper
const loginShopkeeper = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await Shopkeeper.login(email, password)

// create a token
    const token = createToken(user.email)
    
    res.setHeader(
        'Set-Cookie',
        cookie.serialize(
            'token',
            token,
            {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: 'Lax',  // or comment this line for default behavior
                path: '/',
            }
        )
    );

    res.status(200).json({Status : "Success"})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a shopkeeper
const signupShopkeeper = async (req, res) => {
  const {email, password, confirmpassword, mobile, ShopName} = req.body

  try {
    const user = await Shopkeeper.signup(email, password,mobile, ShopName)

    //create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupShopkeeper, loginShopkeeper }

