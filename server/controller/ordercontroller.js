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
        console.log(1)
        // req.body in form of {CustomerEmail : '', orderdetails : [{ProductName : '',ShopName : '', quantity : 0, price : 0}, more products]}
        const CustomerEmail = req.body.CustomerEmail;
        const orderdetails = req.body.orderdetails;
        const OrderID = generateOrderID()
        console.log(orderdetails)
      
        for (const product of orderdetails) {
            const orderData = {
              OrderID:OrderID,
              CustomerEmail: CustomerEmail,
              ShopName: product.ShopName,
              ProductName: product.ProductName,
              quantity: product.quantity,
              price: product.price
            };
            console.log(orderData)
      
            // Create a new order for the current product
            const createdOrder = await OrderModel.create(orderData);
            console.log(101);
          }

      res.status(201); // Send a 201 status for successful creation
      console.log('yes')
    } catch (err) {
      console.log(err)
      // console.error(err);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle other errors with a 500 status
    }
  };
  


  const getOrderOfCustomer = async (req, res) => {
    try {
        const CustomerEmail = req.body.CustomerEmail;
        const orders = await OrderModel.find({ CustomerEmail: CustomerEmail });
        console.log(orders)
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  };


  const getOrderByShopName = async (req, res) => {
    try {
        const ShopName = req.body.ShopName;
        const orders = await OrderModel.find({ ShopName: ShopName });
        console.log(orders)
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  };



  module.exports = { neworder , getOrderOfCustomer , getOrderByShopName };