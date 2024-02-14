const express = require('express');
const {products , getAllProducts, GetProductsByCategory} = require("../controller/productscontroller");

const router = express.Router();

router.get('/GetProductsByCategory', GetProductsByCategory);
router.post('/products', products);
router.get('/getAllProducts', getAllProducts);

module.exports = router;
