const mongoose = require("mongoose");
const FeedbackModel = require("../models/Schema");

const createFeedback = async (req, res) => {  FeedbackModel.create(req.body)
    .then((feedbacks) => res.json(feedbacks))
    .catch((err) => res.json(err));
};

const getFeedback = async (req, res) => {FeedbackModel.find()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
module.exports = { createFeedback, getFeedback };