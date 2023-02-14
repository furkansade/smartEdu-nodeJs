const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createOneUser); //users/signup
router.route('/login').post(authController.loginOneUser); 
router.route('/logout').get(authController.logoutOneUser); 
router.route('/dashboard').get(authController.getDashboardPage); 

module.exports = router;
