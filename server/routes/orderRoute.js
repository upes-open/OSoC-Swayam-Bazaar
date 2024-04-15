const express = require('express');
const {neworder , getOrderOfCustomer , getOrderByShopName} = require("../controller/ordercontroller");

const router = express.Router();

router.post('/neworder', neworder);
router.get('/getOrderOfCustomer', getOrderOfCustomer);
router.get('/getOrderByShopName', getOrderByShopName);

module.exports = router;
