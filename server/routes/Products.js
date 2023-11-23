const express = require('express')
const {createProducts,getProducts} = require('../controller/productscontroller')

const router = express.Router()


// controller functions
router.post("/createProducts", createProducts)
router.get("/getProducts", getProducts)

module.exports = router