const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Products = require('../models/productsModel.js');
const AllProducts = require('../seed/products.json');

const productsRouter = express.Router();

productsRouter.get(
  '/api/fetchProducts',
  expressAsyncHandler(async (req, res) => {
    await Products.find({}, (err, users) => {
      res.send(users);
    });
  })
);

productsRouter.post(
  '/api/seed',
  expressAsyncHandler(async (req, res) => {
    try {
      await Products.deleteMany();
      await Products.insertMany(AllProducts, (err) => {
        res.send('inserted products');
      });
    } catch (err) {}
  })
);

module.exports = productsRouter;
