const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Products = require('../models/productsModel.js');
const AllProducts = require('../seed/products.json');

const productsRouter = express.Router();

productsRouter.get(
  '/api/getProducts',
  expressAsyncHandler(async (req, res) => {
    res.status(201).send('products fetched');
  })
);

productsRouter.post(
  '/api/seed',
  expressAsyncHandler(async (req, res) => {
    try {
      const seedProducts = await Products.insertMany(AllProducts, (err) => {
        res.send('inserted products');
      });
    } catch (err) {}
  })
);

module.exports = productsRouter;
