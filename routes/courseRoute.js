const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createOneCourse); // http://localhost:3000/courses 

module.exports = router;
