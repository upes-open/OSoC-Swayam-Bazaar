const OrderModel = require('../models/Order.js');


function generateOrderID() {
    const min = 10000000;
    const max = 99999999;
  
    // Generate a random number within the specified range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Format the random number as a string with leading zeros
    const formattedOrderID = `OD${randomNumber.toString().padStart(8, '0')}`;
  
    return formattedOrderID;
  }
  


    const neworder = async (req, res) => {
      try {
        // req.body in form of {CustomerEmail : '', orderdetails : [{ProductName : '',ShopName : '', quantity : 0, price : 0}, more products]}
        const CustomerEmail = req.body.name;
        const orderdetails = req.body.orderdetails;
        const OrderID = generateOrderID()
      
        for (const product of orderdetails) {
            const orderData = {
              OrderID:OrderID,
              CustomerEmail: CustomerEmail,
              ShopName: product.ShopName,
              ProductName: product.ProductName,
              quantity: product.quantity,
              price: product.price
            };
      
            // Create a new order for the current product
            const createdOrder = await OrderModel.create(orderData);
            console.log('Created order:', createdOrder);
          }

      console.log(req.body);
      res.status(201).json(createdProduct); // Send a 201 status for successful creation
    } catch (err) {
      console.log(req)
      // console.error(err);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle other errors with a 500 status
    }
  };
  
  module.exports = { neworder };