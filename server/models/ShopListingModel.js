
const mongoose=require('mongoose');


const ShopSchema=new mongoose.Schema({
    shopname:String,
    description:String,
    address:String,
    contactnumber:String,
    shopimage:String
})

mongoose.model("shoplists",ShopSchema)

