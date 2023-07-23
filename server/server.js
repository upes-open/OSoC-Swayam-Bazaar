
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const Feedback = require("./routes/Feedback");
const Shopkeeper = require("./routes/Shopkeeper");
const ShopListing = require("./routes/ShopListing");
const user = require("./routes/User");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/Feedback", Feedback);
app.use("/api/Shopkeeper", Shopkeeper);
app.use("/api/Shoplisting", ShopListing);
app.use("/api/User", user);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')

    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT||5000)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

