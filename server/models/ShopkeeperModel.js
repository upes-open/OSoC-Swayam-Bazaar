const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const shopkeeperSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  mobile: {
    type : Number
  },
  ShopName: {
    type: String,
  }
})

// static signup method
shopkeeperSchema.statics.signup = async function(email, password, mobile, ShopName) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash, mobile, ShopName })
  //THIS WHERE ITS BEEN CREATED

  return user
}
// static login method
shopkeeperSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('Shopkeeper', shopkeeperSchema)