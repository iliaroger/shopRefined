const bcrypt = require('bcrypt');
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const postRouter = express.Router();

postRouter.post(
  '/api/register',
  expressAsyncHandler(async (req, res) => {
    const { gender, firstName, lastName, email, password } = req.body;
    try {
      const checkUserExist = await User.findOne({ email: email });
      if (checkUserExist) {
        return res.send({
          status: 'error',
          message: 'user already exists',
        });
      }
      const generateSalt = await bcrypt.genSaltSync(10);
      const generateHash = await bcrypt.hashSync(password, generateSalt);
      await User.create({
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: generateHash,
      }).then((result) => {
        return res.send({
          status: 'success',
          message: {
            firstName: result.firstName,
            lastName: result.lastName,
            gender: result.gender,
            email: result.email,
          },
        });
      });
    } catch (err) {
      return res.send({
        status: 'error',
        message: err,
      });
    }
  })
);

module.exports = postRouter;
