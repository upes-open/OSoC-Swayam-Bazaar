const express = require('express');
const products = require("../controller/productscontroller");

const router = express.Router();

router.post('/products', products);

module.exports = router;
