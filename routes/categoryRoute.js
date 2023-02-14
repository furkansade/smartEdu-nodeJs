const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createOneCategory); 
// router.route('/').get(categoryController.getAllCategories); 



module.exports = router;
