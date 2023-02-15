const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

const User = require('../models/User');

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('enter your name!'),

    body('email')
      .not()
      .isEmpty()
      .withMessage('enter your email!')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject('email is already exists!');
          }
        });
      }),

    body('password').not().isEmpty().withMessage('enter your password!'),
  ],
  authController.createOneUser
); //users/signup
router.route('/login').post(authController.loginOneUser);
router.route('/logout').get(authController.logoutOneUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);
router.route('/:id').delete(authController.deleteOneUser);

module.exports = router;
