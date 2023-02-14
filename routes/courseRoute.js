const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createOneCourse); // http://localhost:3000/courses -> post
router.route('/').get(courseController.getAllCourses); // http://localhost:3000/courses -> get
router.route('/:slug').get(courseController.getOneCourse); 


module.exports = router;
