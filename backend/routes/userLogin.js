const express = require('express');
const User = require('../models/userModel.js');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const userLoginHandler = express.Router();

userLoginHandler.post(
  '/api/loginUser',
  expressAsyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkEmail = await User.exists({ email: email });
      if (!checkEmail) {
        return res.status(404).send({
          status: 'error',
          message: 'User not found, please creata a new account.',
        });
      } else {
        const userHashedPassword = await User.find(
          { email: email },
          'password'
        ).exec();
        const checkPassword = bcrypt.compareSync(
          password,
          userHashedPassword[0].password
        );
        if (checkPassword) {
          const getUser = await User.findOne({ email: email });
          return res.status(200).send({
            status: 'success',
            message: {
              firstName: getUser.firstName,
              lastName: getUser.lastName,
              gender: getUser.gender,
              email: email,
            },
          });
        } else {
          return res
            .status(500)
            .send({ status: 'error', message: 'Wrong password.' });
        }
      }
    } catch (err) {}
  })
);

module.exports = userLoginHandler;
