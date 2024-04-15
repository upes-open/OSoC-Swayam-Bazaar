const express = require('express');
const {products , getAllProducts, GetProductsByCategory,GetProductsByShopName} = require("../controller/productscontroller");

const router = express.Router();

router.get('/GetProductsByCategory', GetProductsByCategory);
router.post('/products', products);
router.get('/getAllProducts', getAllProducts);
router.get('/getProductByShopName', GetProductsByShopName);

module.exports = router;
