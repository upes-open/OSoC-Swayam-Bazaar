const mongoose=require('mongoose')

const FeedbackSchema=new mongoose.Schema({
  ordernumber:String,
  rating:String,
  productfeedback:String,
  deliveryfeedback:String  
})

const FeedbackModel=mongoose.model("feebacks",FeedbackSchema)

module.exports=FeedbackModel;