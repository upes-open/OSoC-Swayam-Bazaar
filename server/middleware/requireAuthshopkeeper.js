const jwt = require('jsonwebtoken')
const Shopkeeper = require('../models/ShopkeeperModel')


const authenticateShopkeeper = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Assuming you are storing the token in a cookie named 'token'
    if (!token) {
      // No token provided, user is not logged in
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET); // Replace 'your-secret-key' with your actual secret key
    // Check if the user exists
    const user = await Shopkeeper.findOne({ email: decoded.email });
    if (!user) {
      // User not found
      return res.status(401).json({ error: 'Unauthorized wrong cred' });
    }
    // Attach the user object to the request for further use
    req.user = user;
    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticateShopkeeper;
