const express = require('express')
const {products,getProducts} = require('../controller/productscontroller')

const router = express.Router()


// controller functions
router.post("/products", products)
router.get("/getProducts", getProducts)

module.exports = router