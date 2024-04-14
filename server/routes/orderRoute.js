const express = require('express');
const {neworder} = require("../controller/ordercontroller");

const router = express.Router();

router.get('/neworder', neworder);

module.exports = router;
