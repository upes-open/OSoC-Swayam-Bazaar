const mongoose=require('mongoose')

const ContactUsSchema = new mongoose.Schema
({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const ContactUs = new mongoose.model('ContactUs', ContactUsSchema);

module.exports=ContactUs;