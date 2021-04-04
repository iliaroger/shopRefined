const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const ProductsHandlers = require('./routes/getProducts.js');

mongoose
  .connect(process.env.MONGODB_URI, {
    autoIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(ProductsHandlers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
