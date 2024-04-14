const express = require('express');
const {neworder} = require("../controller/ordercontroller");

const router = express.Router();

router.post('/neworder', neworder);

module.exports = router;
