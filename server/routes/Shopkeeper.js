const express = require('express')

// controller functions
const { loginShopkeeper, signupShopkeeper} = require('../controller/shopkeepercontroller')

const router = express.Router()

// login route
router.post('/loginshopkeeper', loginShopkeeper)

// signup route
router.post('/signupShopkeeper', signupShopkeeper)

module.exports = router