const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const uri = '';
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
