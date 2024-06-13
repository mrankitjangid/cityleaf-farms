const express = require('express');
const dotenv = require('dotenv');
const expressEjsLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb = require('./server/config/db');
const productModel = require('./server/models/productModel');

const app = express();

dotenv.config({});
connectDb();


const PORT = process.env.PORT || 3000;


app.use(expressEjsLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));


app.post('/getcart', async (req, res) => {
    let cart = req.body.cart;
    const freq = new Map();
    cart.forEach(element => {
        element = element.substring(1, element.length - 1);
        if( freq.has(element) ) freq.set(element, freq.get(element) + 1);
        else freq.set(element, 1);
    });
    let keys = freq.keys();
    let response = [];
    for( let key of keys ) {
        let product = await productModel.findById(key);
        product.count = freq.get(key);
        response.push(product);
    }
    res.send(response);
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});