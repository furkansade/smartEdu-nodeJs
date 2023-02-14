const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/').get(pageController.getHomePage); // http://localhost:3000/
router.route('/about').get(pageController.getAboutPage); // http://localhost:3000/about

module.exports = router;
