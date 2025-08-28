const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/workshop', (req, res) => {
    res.render('workshop');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/products', async (req, res) => {
    let data = await productModel.find();
    res.render('products', {data});
});

router.get('/cart', async (req, res) => {
    let cart = req.params.a;
    console.log(cart);
    res.render('cart');
})

module.exports = router;