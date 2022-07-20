const mongoose = require('mongoose');// here you import mongoose

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'The title of the product is required'],
        minlength: [2, 'The product must be at least 2 characters long'],
        maxlength: [200, 'The product must be less than 200 characters']
    },
    price: {
        type: Number,
        required: [true, 'The product must have a price'],
        min: [0, 'The product price must be a positive number']
    },
    description: {
        type: String,
        required: [true, 'You must add a description to the product'],
        minlength: [2, 'The product description must be at least 2 characters long']
    }
})

// const User = mongoose.model('User', UserSchema);// example
const Product = mongoose.model('Product', ProductSchema)

// module.exports = User; //example
module.exports = Product;