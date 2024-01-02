const express = require('express');
const {products , getAllProducts} = require("../controller/productscontroller");

const router = express.Router();

router.post('/products', products);
router.get('/getAllProducts', getAllProducts);

module.exports = router;
