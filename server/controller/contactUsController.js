const mongoose = require('mongoose');
const ContactUs = require('../models/ContactUs');

const contactus = async (req, res) => {  ContactUs.create(req.body)
  .then((contacts) => res.json(contacts))
  .catch((err) => res.json(err));
};

module.exports = contactus;