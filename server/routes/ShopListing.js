const express = require('express')

const {ListShop,DisplayShop} = require('../controller/shoplistingcontroller')


const requireAuthuser= require('../middleware/requireAuthuser')
const router = express.Router()

router.use(requireAuthuser)

router.post("/listshop",ListShop)

router.get("/displayshop",DisplayShop)

module.exports = router