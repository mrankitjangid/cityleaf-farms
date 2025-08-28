const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    }, 
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }, 
    count: {
        type: Number,
        require: false
    }
});

module.exports = mongoose.model('products', productSchema);