const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createOneUser); //users/signup
router.route('/login').post(authController.loginOneUser); 
router.route('/logout').get(authController.logoutOneUser); 

module.exports = router;
