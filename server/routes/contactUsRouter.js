const express = require('express');
const contactus=require("../controller/contactUsController");

const router = express.Router();

router.post('/contact-us', contactus);

module.exports = router;
