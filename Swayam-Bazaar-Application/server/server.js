const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FeedbackModel = require('../src/models/Schema');
require('dotenv').config({ path: '../.env.local' });

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.REACT_APP_API_PORT || 3001;

const db = process.env.REACT_APP_MONGO_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });
app.post('/feedback', (req, res) => {
  FeedbackModel.create(req.body)
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.json(err));
});

app.get('/feed', (req, res) => {
  FeedbackModel.find()
    .then((data) => {
      res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

const server = app.listen(port, () => {
  console.log(`Server is up listening on port: ${port}`);
});
