const express = require('express')

// controller functions
const { loginShopkeeper, signupShopkeeper} = require('../controller/shopkeepercontroller')
const authenticateShopkeeper = require('../middleware/requireAuthshopkeeper')

const router = express.Router()

// login route
router.post('/loginshopkeeper', loginShopkeeper)

// signup route
router.post('/signupShopkeeper', signupShopkeeper)

//authentication route
router.get('/authenticateShopkeeper', authenticateShopkeeper, (req, res) => {
    // If the middleware passes, the user is logged in, and req.user contains the user object
    res.json({ message: 'Shopkeeper is logged in', user: req.user });
  });

module.exports = router