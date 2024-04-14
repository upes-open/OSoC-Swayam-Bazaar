const mongoose=require('mongoose')


const OrderSchema = new mongoose.Schema
({
    OrderID: { type: String, required: true },
    CustomerEmail: { type: String, required: true },
    ShopName: { type: String, required: true },
    ProductName: { type: String, required: true },
    quantity:{ type: Number, required: true },
    price: { type: Number, required: true },
});

const Orders = new mongoose.model('Orders', OrderSchema);

module.exports=Orders;