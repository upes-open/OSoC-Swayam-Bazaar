const mongoose=require('mongoose')

const ProductsSchema = new mongoose.Schema
({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String, required: true },
});

const Products = new mongoose.model('Products', ProductsSchema);

module.exports=Products;