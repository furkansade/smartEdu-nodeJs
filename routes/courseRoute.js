const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createOneCourse); // http://localhost:3000/courses -> post
router.route('/').get(courseController.getAllCourses); // http://localhost:3000/courses -> get
router.route('/:slug').get(courseController.getOneCourse);
router.route('/enroll').post(courseController.enrollOneCourse);
router.route('/release').post(courseController.releaseOneCourse);

module.exports = router;
