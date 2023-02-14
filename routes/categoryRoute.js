const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createOneCategory); 



module.exports = router;
