const mongoose=require('mongoose')
require('dotenv').config()

const createProductsModelForUser = (email, connection) => {
    const ProductsSchema = new mongoose.Schema({
      name: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
      picture: { type: String, required: true },
    });
  
    // Dynamically create model for each user's "products" collection
    return connection.model('Products', ProductsSchema);
  };

const createUserDatabaseConnection = (name) => {
    const userDBUri = `${process.env.MONGO_URI}${name}`;
    console.log(userDBUri)
    return mongoose.createConnection(userDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };


module.exports={createProductsModelForUser,createUserDatabaseConnection};